import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import { CurrentWeatherCard } from '../../components/CurrentWeatherCard';
import { FiveDaysForecast } from '../../components/FiveDaysForecast';
import { SearchBar } from '../../components/SearchBar';
import { ScreenContainer } from './HomeScreen.styled';

export const HomeScreen: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<ScreenContainer sx={{ bgcolor: 'background.default' }}>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					</Grid>
					<Grid item xs={12}>
						<CurrentWeatherCard />
					</Grid>

					<Grid item xs={12} md={6}>
						<FiveDaysForecast />
					</Grid>
					<Grid item xs={12} md={6}>
						<FiveDaysForecast />
					</Grid>
				</Grid>
			</Container>
		</ScreenContainer>
	);
};
