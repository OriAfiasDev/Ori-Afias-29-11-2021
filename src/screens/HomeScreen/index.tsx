import { useState } from 'react';
import { CurrentWeatherCard } from '../../components/CurrentWeatherCard';
import { SearchBar } from '../../components/SearchBar';
import { ScreenContainer, ContentContainer } from './HomeScreen.styled';

export const HomeScreen: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<ScreenContainer sx={{ bgcolor: 'background.default' }}>
			<ContentContainer>
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</ContentContainer>

			<ContentContainer>
				<CurrentWeatherCard />
			</ContentContainer>
		</ScreenContainer>
	);
};
