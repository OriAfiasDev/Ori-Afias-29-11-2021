import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import { Logo } from '../shared/Logo';
import { Toolbar } from './Header.styled';
import { Nav } from './Nav';

export const Header = () => (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position='static' enableColorOnDark>
			<Toolbar variant='regular'>
				<Logo />
				<Nav />
			</Toolbar>
		</AppBar>
	</Box>
);
