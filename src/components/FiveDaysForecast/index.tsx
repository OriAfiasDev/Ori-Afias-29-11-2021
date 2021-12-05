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
	const [dailyForecast, setDailyForecast] = useState<{ C: DailyForecast; F: DailyForecast }>({ C: null!, F: null! });
	const snackbar = useSnackbar();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			if (!dailyForecast[degrees.sign]) {
				setLoading(true);
				const res = await getDailyForecast(selectedCity.key, degrees.sign === 'C');
				setLoading(false);
				if (!res) {
					return snackbar.enqueueSnackbar('Oops, We could not get your weather.');
				}
				setDailyForecast(current => ({ ...current, [degrees.sign]: res }));
			}
		})();
		// eslint-disable-next-line
	}, [degrees, selectedCity]);

	return loading ? (
		<CircularProgress />
	) : (
		dailyForecast[degrees.sign] && (
			<>
				<Grid item xs={12} md={6}>
					<Expandable
						sx={{ beforeCollapse: { display: 'flex', minHeight: 302 } }}
						beforeCollapse={<FiveDaysChart dailyForecast={dailyForecast[degrees.sign]} />}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<Expandable beforeCollapse={<FiveDaysList dailyForecast={dailyForecast[degrees.sign]} />} />
				</Grid>
			</>
		)
	);
};
