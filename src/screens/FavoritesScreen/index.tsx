import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Box } from '@mui/system';
import { favoritesSelector } from '../../redux/selectors';
import { getCurrentWeather } from '../../api';
import { Page } from '../../components/shared/Page';
import { SmallWeatherCard } from '../../components/SmallWeatherCard';

export const FavoritesScreen: React.FC = () => {
	const favorites = useSelector(favoritesSelector);
	const snackbar = useSnackbar();
	const [loading, setLoading] = useState<number>(-1);

	useEffect(() => {
		favorites.map(async (fav, index) => {
			setLoading(index);
			const res = await getCurrentWeather(fav.key);
			setLoading(-1);
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
			{favorites.map((fav, index) => (
				<Box sx={{ my: 1 }} key={fav.key}>
					<SmallWeatherCard city={fav} loading={loading === index} />
				</Box>
			))}
		</Page>
	);
};
