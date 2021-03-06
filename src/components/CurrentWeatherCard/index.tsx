import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesSelector, selectedCitySelector } from '../../redux/selectors';
import { getCurrentWeather } from '../../api';
import { CurrentWeatherResult } from '../../models/CurrentWeather';
import { Expandable } from '../shared/Expandable';
import { CurrentWeatherMeta } from './CurrentWeatherMeta';
import { CurrentWeatherInfo } from './CurrentWeatherInfo';
import { CurrentWeatherMoreInfo } from './CurrentWeatherMoreInfo';
import { CircularProgress, Divider, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { addToFavorites, removeFromFavorites } from '../../redux/actions/favorites';
import { useSnackbar } from 'notistack';
import { Favorite } from '../../models/redux';

export const CurrentWeatherCard: React.FC = () => {
	const dispatch = useDispatch();
	const selectedCity = useSelector(selectedCitySelector);
	const favorites = useSelector(favoritesSelector);
	const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResult>(null!);
	const [isFav, setIsFav] = useState<boolean>(favorites.findIndex(fav => fav.key === selectedCity.key) >= 0);
	const snackbar = useSnackbar();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const current = await getCurrentWeather(selectedCity.key);
			setLoading(false);
			if (!current) return snackbar.enqueueSnackbar('Oops, We could not get your weather.', { variant: 'error' });
			setCurrentWeather(current[0]);
		})();
	}, [selectedCity, snackbar]);

	useEffect(() => {
		setIsFav(favorites.findIndex(fav => fav.key === selectedCity.key) >= 0);
	}, [selectedCity, favorites]);

	const toggleFavorite = () => {
		const payload: Favorite = {
			...selectedCity,
			currentWeather: {
				Imperial: currentWeather.Temperature.Imperial.Value,
				Metric: currentWeather.Temperature.Metric.Value,
				icon: currentWeather.WeatherIcon,
				text: currentWeather.WeatherText,
			},
		};
		setIsFav(currentState => {
			const updatedState = !currentState;
			dispatch(currentState ? removeFromFavorites(payload) : addToFavorites(payload));
			return updatedState;
		});
	};

	return (
		currentWeather && (
			<Expandable
				beforeCollapse={
					loading ? (
						<CircularProgress />
					) : (
						<div>
							<CurrentWeatherMeta currentWeather={currentWeather} />
							<CurrentWeatherInfo currentWeather={currentWeather} />
						</div>
					)
				}
				insideCollapse={
					<>
						<Divider variant='middle' sx={{ mb: 4 }} />
						<CurrentWeatherMoreInfo currentWeather={currentWeather} />
					</>
				}
				moreActions={<IconButton onClick={toggleFavorite}>{isFav ? <HeartBrokenIcon /> : <FavoriteIcon />}</IconButton>}
			/>
		)
	);
};
