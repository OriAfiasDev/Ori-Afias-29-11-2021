import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { CurrentWeatherCard } from '../../components/CurrentWeatherCard';
import { FiveDaysForecast } from '../../components/FiveDaysForecast';
import { SearchBar } from '../../components/SearchBar';
import { Page } from '../../components/shared/Page';
import { useDispatch } from 'react-redux';
import { getCurrentWeatherByCoords } from '../../api';
import { setSelectedCity } from '../../redux/actions/selectedCity';

export const HomeScreen: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			navigator.geolocation.getCurrentPosition(async success => {
				const res = await getCurrentWeatherByCoords(success.coords.longitude, success.coords.latitude);
				if (res) {
					dispatch(setSelectedCity({ country: res.Country.ID, key: res.Key, name: res.LocalizedName }));
				}
			});
		})();
	}, [dispatch]);

	return (
		<Page>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<SearchBar />
				</Grid>
				<Grid item xs={12} md={6}>
					<CurrentWeatherCard />
				</Grid>

				<FiveDaysForecast />
			</Grid>
		</Page>
	);
};
