import { Grid } from '@mui/material';
import { CurrentWeatherCard } from '../../components/CurrentWeatherCard';
import { FiveDaysForecast } from '../../components/FiveDaysForecast';
import { SearchBar } from '../../components/SearchBar';
import { Page } from '../../components/shared/Page';

export const HomeScreen: React.FC = () => (
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
