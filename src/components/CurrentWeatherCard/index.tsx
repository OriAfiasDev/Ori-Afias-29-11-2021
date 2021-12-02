import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentWeather } from '../../api';
import { CurrentWeatherResult } from '../../models/CurrentWeather';
import { degreesSelector, selectedCitySelector } from '../../redux/selectors';
import { getGradientByWeather } from '../../utils/gradient';
import { Expandable } from '../shared/Expandable';
import { Row } from './CurrentWeatherCard.styled';

export const CurrentWeatherCard: React.FC = () => {
	const selectedCity = useSelector(selectedCitySelector);
	const degrees = useSelector(degreesSelector);
	const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResult>(null!);

	useEffect(() => {
		(async () => {
			const current = await getCurrentWeather(selectedCity.key);
			setCurrentWeather(current[0]);
		})();
	}, [selectedCity]);

	return (
		currentWeather && (
			<Container>
				<Expandable
					beforeCollapse={
						<Row>
							<Typography variant='h1'>{currentWeather.Temperature[degrees === 'C' ? 'Metric' : 'Imperial'].Value}°</Typography>
							{/* <img alt={currentWeather.WeatherText} src={`../../assets/icons/${currentWeather.WeatherIcon}.png`} height={45} width={75} /> */}
							<div>
								<Typography variant='subtitle1'>{new Date(currentWeather.LocalObservationDateTime).toLocaleDateString('he-IL')}</Typography>
								<Typography variant='subtitle1'>{selectedCity.name}</Typography>
								<Typography variant='subtitle1'>{currentWeather.WeatherText}</Typography>
							</div>
						</Row>
					}
				/>
			</Container>
		)
	);
};
