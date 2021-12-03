import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDailyForecast } from '../../api';
import { DailyForecast } from '../../models/DailyForecast';
import { degreesSelector, selectedCitySelector } from '../../redux/selectors';
import { Expandable } from '../shared/Expandable';
import { FiveDaysChart } from './FiveDaysChart';

export const FiveDaysForecast: React.FC = () => {
	const selectedCity = useSelector(selectedCitySelector);
	const degrees = useSelector(degreesSelector);
	const [dailyForecast, setDailyForecast] = useState<{ C: DailyForecast; F: DailyForecast }>({ C: null!, F: null! });

	useEffect(() => {
		(async () => {
			if (!dailyForecast[degrees.sign]) {
				const res = await getDailyForecast(selectedCity.key, degrees.sign === 'C');
				setDailyForecast(current => ({ ...current, [degrees.sign]: res }));
			}
		})();
		// eslint-disable-next-line
	}, [degrees, selectedCity]);

	return dailyForecast[degrees.sign] && <Expandable insideCollapse={<FiveDaysChart dailyForecast={dailyForecast[degrees.sign]} />} />;
};
