import { CircularProgress, Grid, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { degreesSelector } from '../../redux/selectors';
import { Expandable } from '../shared/Expandable';
import { WeatherIcon } from '../shared/WeatherIcon';

import InfoIcon from '@mui/icons-material/Info';

import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { removeFromFavorites } from '../../redux/actions/favorites';
import { setSelectedCity } from '../../redux/actions/selectedCity';
import { useNavigate } from 'react-router';
import { DEGREE_SIGN } from '../../utils/constants';
import { Favorite } from '../../models/redux';

interface Props {
	city: Favorite;
	loading?: boolean;
}

export const SmallWeatherCard: React.FC<Props> = ({ city, loading }) => {
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
				loading ? (
					<CircularProgress />
				) : (
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
				)
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
