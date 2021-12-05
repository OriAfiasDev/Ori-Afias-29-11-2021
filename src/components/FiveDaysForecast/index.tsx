import { CircularProgress, Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDailyForecast } from '../../api';
import { DailyForecast } from '../../models/DailyForecast';
import { degreesSelector, selectedCitySelector } from '../../redux/selectors';
import { Expandable } from '../shared/Expandable';
import { FiveDaysChart } from './FiveDaysChart';
import { FiveDaysList } from './FiveDaysList';

export const FiveDaysForecast: React.FC = () => {
	const selectedCity = useSelector(selectedCitySelector);
	const degrees = useSelector(degreesSelector);
	const [dailyForecast, setDailyForecast] = useState<DailyForecast>(null!);
	const snackbar = useSnackbar();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const res = await getDailyForecast(selectedCity.key, degrees.sign === 'C');
			setLoading(false);
			if (!res) {
				return snackbar.enqueueSnackbar('Oops, We could not get your weather.', { variant: 'error' });
			}
			setDailyForecast(res);
		})();
		// eslint-disable-next-line
	}, [degrees, selectedCity]);

	return (
		dailyForecast && (
			<>
				<Grid item xs={12} md={6}>
					<Expandable
						sx={{ beforeCollapse: { display: 'flex', minHeight: 302 } }}
						beforeCollapse={loading ? <CircularProgress /> : <FiveDaysChart dailyForecast={dailyForecast} />}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<Expandable beforeCollapse={loading ? <CircularProgress /> : <FiveDaysList dailyForecast={dailyForecast} />} />
				</Grid>
			</>
		)
	);
};
