import { Grid, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite } from '../../redux/reducers/favorites';
import { degreesSelector } from '../../redux/selectors';
import { DEGREE_SIGN } from '../../utils/gradient';
import { Expandable } from '../shared/Expandable';
import { WeatherIcon } from '../shared/WeatherIcon';

import InfoIcon from '@mui/icons-material/Info';

import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { RowSpaceBetween, RowSpaceEvenly } from '../shared/Row';
import { removeFromFavorites } from '../../redux/actions/favorites';
import { setSelectedCity } from '../../redux/actions/selectedCity';
import { useNavigate } from 'react-router';

interface Props {
	city: Favorite;
}

export const SmallWeatherCard: React.FC<Props> = ({ city }) => {
	const degrees = useSelector(degreesSelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onShowMore = () => {
		dispatch(setSelectedCity(city));
		navigate('/');
	};

	const onRemoveCity = () => dispatch(removeFromFavorites(city));

	return (
		<Expandable
			sx={{ container: { width: '100%' } }}
			beforeCollapse={
				<Grid container spacing={4}>
					<Grid item xs={4}>
						<Typography variant='h5'>{city.name.toUpperCase()}</Typography>
					</Grid>
					<Grid item xs={2}>
						<WeatherIcon iconNumber={city.currentWeather.icon} alt={city.name} />
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h5'>{city.currentWeather.text}</Typography>
					</Grid>
					<Grid item xs={4} textAlign='right'>
						<Typography variant='h5'>
							{city.currentWeather[degrees.system]}
							{DEGREE_SIGN}
						</Typography>
					</Grid>
				</Grid>
			}
			moreActions={
				<>
					<IconButton onClick={onShowMore}>
						<InfoIcon />
					</IconButton>
					<IconButton onClick={onRemoveCity}>
						<HeartBrokenIcon />
					</IconButton>
				</>
			}
		/>
	);
};
