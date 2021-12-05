import { Box } from '@mui/system';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentWeather } from '../../api';
import { Page } from '../../components/shared/ScreenContainer';
import { SmallWeatherCard } from '../../components/SmallWeatherCard';
import { favoritesSelector } from '../../redux/selectors';

export const FavoritesScreen: React.FC = () => {
	const favorites = useSelector(favoritesSelector);
	const snackbar = useSnackbar();

	useEffect(() => {
		favorites.map(async fav => {
			const res = await getCurrentWeather(fav.key);
			if (!res) {
				return snackbar.enqueueSnackbar('Oops, we could not update the weather', { variant: 'error' });
			}
			const weather = res[0];
			return {
				...fav,
				currentWeather: {
					Metric: weather.Temperature.Metric.Value,
					Imperial: weather.Temperature.Imperial.Value,
					icon: weather.WeatherIcon,
					text: weather.WeatherText,
				},
			};
		});
	}, []);
	return (
		<Page>
			{favorites.map(fav => (
				<Box sx={{ my: 1 }} key={fav.key}>
					<SmallWeatherCard city={fav} />
				</Box>
			))}
		</Page>
	);
};
