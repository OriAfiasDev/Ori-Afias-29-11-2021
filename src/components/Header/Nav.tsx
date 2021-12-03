import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { degreesSelector, themeSelector } from '../../redux/selectors';
import { toggleDegrees } from '../../redux/actions/degrees';
import { toggleTheme } from '../../redux/actions/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { NavIcon } from '../shared/Icon';
import { Row } from '../shared/Row';

export const Nav: React.FC = () => {
	const navigate = useNavigate();
	const theme = useSelector(themeSelector);
	const degrees = useSelector(degreesSelector);
	const dispatch = useDispatch();

	const handleThemeChange = React.useCallback(() => {
		dispatch(toggleTheme());
	}, [dispatch]);

	const handleDegreesChange = React.useCallback(() => {
		dispatch(toggleDegrees());
	}, [dispatch]);

	return (
		<Row>
			<NavIcon Icon={HomeIcon} onClick={() => navigate('/')} />

			<NavIcon Icon={FavoriteIcon} onClick={() => navigate('/favorites')} />

			<NavIcon Icon={theme === 'light' ? DarkModeIcon : LightModeIcon} onClick={handleThemeChange} />

			<NavIcon Icon={DeviceThermostatIcon} onClick={handleDegreesChange} badgeContent={degrees.sign} />
		</Row>
	);
};
