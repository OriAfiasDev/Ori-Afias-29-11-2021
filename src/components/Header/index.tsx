import { AppBar } from '@mui/material';
import { HeaderContainer, Logo, Toolbar } from './Header.styled';
import { Nav } from './Nav';

export const Header = () => (
	<HeaderContainer>
		<AppBar position='static' enableColorOnDark>
			<Toolbar color='primary'>
				<Logo />
				<Nav />
			</Toolbar>
		</AppBar>
	</HeaderContainer>
);
