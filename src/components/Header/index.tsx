import * as React from 'react';

import { AppBar, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { degreesSelector, themeSelector } from '../../redux/selectors';
import { toggleTheme } from '../../redux/actions/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { toggleDegrees } from '../../redux/actions/degrees';
import { HeaderContainer, Logo, Toolbar } from './Header.styled';
import { Row } from '../shared/Row';
import { NavIcon } from '../shared/Icon';
import { useNavigate } from 'react-router-dom';
import { useScreenSize } from '../../hooks/useScreenSize'


export const Header = () => {
	const theme = useSelector(themeSelector);
	const degrees = useSelector(degreesSelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { width } = useScreenSize()

	const handleThemeChange = React.useCallback(() => {
		dispatch(toggleTheme());
	}, []);

	const handleDegreesChange = React.useCallback(() => {
		dispatch(toggleDegrees());
	}, []);

	return (
		<HeaderContainer>
			<AppBar position='static' enableColorOnDark>
				<Toolbar color='primary'>
					<Logo />
					<Row>
						<NavIcon Icon={HomeIcon} onClick={() => navigate('/')} />

						{/* <Divider orientation='horizontal' variant={width > 480 ? 'middle' : 'fullWidth'} /> */}

						<NavIcon Icon={FavoriteIcon} onClick={() => navigate('/favorites')}  />

						{/* <Divider orientation='horizontal' variant={width > 480 ? 'middle' : 'fullWidth'} /> */}

						<NavIcon Icon={theme === 'light' ? DarkModeIcon : LightModeIcon} onClick={handleThemeChange}  />

						{/* <Divider orientation='horizontal' variant={width > 480 ? 'middle' : 'fullWidth'} /> */}

						<NavIcon Icon={DeviceThermostatIcon} onClick={handleDegreesChange} badgeContent={degrees[0].toUpperCase()}  />
					</Row>
				</Toolbar>
			</AppBar>
		</HeaderContainer>
	);
};
