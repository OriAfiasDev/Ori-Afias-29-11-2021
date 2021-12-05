import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesSelector, selectedCitySelector } from '../../redux/selectors';
import { getCurrentWeather } from '../../api';
import { CurrentWeatherResult } from '../../models/CurrentWeather';
import { Expandable } from '../shared/Expandable';
import { CurrentWeatherMeta } from './CurrentWeatherMeta';
import { CurrentWeatherInfo } from './CurrentWeatherInfo';
import { CurrentWeatherMoreInfo } from './CurrentWeatherMoreInfo';
import { Divider, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { addToFavorites, removeFromFavorites } from '../../redux/actions/favorites';
import { Favorite } from '../../redux/reducers/favorites';
import { useSnackbar } from 'notistack';

export const CurrentWeatherCard: React.FC = () => {
	const dispatch = useDispatch();
	const selectedCity = useSelector(selectedCitySelector);
	const favorites = useSelector(favoritesSelector);
	const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResult>(null!);
	const [isFav, setIsFav] = useState<boolean>(favorites.findIndex(fav => fav.key === selectedCity.key) >= 0);
	const snackbar = useSnackbar();

	useEffect(() => {
		(async () => {
			const current = await getCurrentWeather(selectedCity.key);
			if (!current) return snackbar.enqueueSnackbar('Oops, We could not get your weather.', { variant: 'error' });
			setCurrentWeather(current[0]);
		})();
	}, [selectedCity]);

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
					<div>
						<CurrentWeatherMeta currentWeather={currentWeather} />
						<CurrentWeatherInfo currentWeather={currentWeather} />
					</div>
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
