import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { Page } from '../../components/shared/ScreenContainer';
import { SmallWeatherCard } from '../../components/SmallWeatherCard';
import { favoritesSelector } from '../../redux/selectors';

export const FavoritesScreen: React.FC = () => {
	const favorites = useSelector(favoritesSelector);
	return (
		<Page>
			{favorites.map(fav => (
				<Box sx={{ my: 1 }}>
					<SmallWeatherCard city={fav} key={fav.key} />
				</Box>
			))}
		</Page>
	);
};
