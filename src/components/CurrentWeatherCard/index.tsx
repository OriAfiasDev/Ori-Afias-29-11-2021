import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedCitySelector } from '../../redux/selectors';
import { getCurrentWeather } from '../../api';
import { CurrentWeatherResult } from '../../models/CurrentWeather';
import { Expandable } from '../shared/Expandable';
import { CurrentWeatherMeta } from './CurrentWeatherMeta';
import { CurrentWeatherInfo } from './CurrentWeatherInfo';
import { CurrentWeatherMoreInfo } from './CurrentWeatherMoreInfo';
import { Divider, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const CurrentWeatherCard: React.FC = () => {
	const selectedCity = useSelector(selectedCitySelector);
	const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResult>(null!);

	useEffect(() => {
		(async () => {
			const current = await getCurrentWeather(selectedCity.key);
			setCurrentWeather(current[0]);
		})();
	}, [selectedCity]);

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
				moreActions={
					<IconButton>
						<FavoriteIcon />
					</IconButton>
				}
			/>
		)
	);
};
