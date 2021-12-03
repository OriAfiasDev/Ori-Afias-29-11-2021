import { AppBar } from '@mui/material';
import { HeaderContainer, Logo, Toolbar } from './Header.styled';
import { Nav } from './Nav';

export const Header = () => (
	<HeaderContainer>
		<AppBar position='static' enableColorOnDark sx={{ height: 80, justifyContent: 'center' }}>
			<Toolbar color='primary' sx={{ display: 'flex', alignItems: 'center' }}>
				<Logo />
				<Nav />
			</Toolbar>
		</AppBar>
	</HeaderContainer>
);
