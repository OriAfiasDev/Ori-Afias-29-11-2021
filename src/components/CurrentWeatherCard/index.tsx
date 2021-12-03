import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedCitySelector } from '../../redux/selectors';
import { getCurrentWeather } from '../../api';
import { CurrentWeatherResult } from '../../models/CurrentWeather';
import { Expandable } from '../shared/Expandable';
import { CurrentWeatherMeta } from './CurrentWeatherMeta';
import { CurrentWeatherInfo } from './CurrentWeatherInfo';
import { CurrentWeatherMoreInfo } from './CurrentWeatherMoreInfo';

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
				insideCollapse={<CurrentWeatherMoreInfo currentWeather={currentWeather} />}
			/>
		)
	);
};
