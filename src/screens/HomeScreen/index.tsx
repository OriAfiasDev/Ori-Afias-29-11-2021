import { Grid } from '@mui/material';
import { useState } from 'react';
import { CurrentWeatherCard } from '../../components/CurrentWeatherCard';
import { FiveDaysForecast } from '../../components/FiveDaysForecast';
import { SearchBar } from '../../components/SearchBar';
import { Page } from '../../components/shared/ScreenContainer';

export const HomeScreen: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<Page>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				</Grid>
				<Grid item xs={12} md={6}>
					<CurrentWeatherCard />
				</Grid>

				<FiveDaysForecast />
			</Grid>
		</Page>
	);
};
