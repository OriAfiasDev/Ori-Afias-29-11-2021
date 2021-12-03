import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { degreesSelector } from '../../redux/selectors';
import { CurrentWeatherResult } from '../../models/CurrentWeather';
import { RowSpaceEvenly } from '../shared/Row';

interface Props {
	currentWeather: CurrentWeatherResult;
}
export const CurrentWeatherInfo: React.FC<Props> = ({ currentWeather }) => {
	const degrees = useSelector(degreesSelector);
	return (
		<RowSpaceEvenly>
			<RowSpaceEvenly>
				<Typography variant='h3'>{currentWeather.Temperature[degrees.system].Value}°</Typography>
				<img src={`../../assets/icons/${currentWeather.WeatherIcon}.png`} alt={currentWeather.WeatherText} />
			</RowSpaceEvenly>
			<div>
				<Typography variant='subtitle2'>{currentWeather.WeatherText}</Typography>
				<Typography variant='subtitle2'>Feels like {currentWeather.RealFeelTemperature[degrees.system].Value}°</Typography>
				<Typography variant='subtitle2'>{currentWeather.WeatherText}</Typography>
			</div>
		</RowSpaceEvenly>
	);
};
