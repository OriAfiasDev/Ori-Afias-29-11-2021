import { useSelector } from 'react-redux';
import { selectedCitySelector } from '../../redux/selectors';
import { Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CurrentWeatherResult } from '../../models/CurrentWeather';
import { Row } from '../shared/Row';
import { MetaRow } from './CurrentWeatherCard.styled';

interface Props {
	currentWeather: CurrentWeatherResult;
}

export const CurrentWeatherMeta: React.FC<Props> = ({ currentWeather }) => {
	const selectedCity = useSelector(selectedCitySelector);
	return (
		<MetaRow>
			<Row>
				<PlaceIcon />
				<Typography variant='subtitle1'>
					{selectedCity.name}, {selectedCity.country}
				</Typography>
			</Row>
			<Row>
				<Typography variant='subtitle1'>{new Date(currentWeather.LocalObservationDateTime).toLocaleString('he-IL')}</Typography>
				<AccessTimeIcon />
			</Row>
		</MetaRow>
	);
};
