import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSelector } from '../redux/selectors';

export const ThemeProvider: React.FC = ({ children }) => {
	const theme = useSelector(themeSelector);

	const themes = {
		dark: createTheme({
			palette: {
				mode: 'dark',
				primary: { main: '#fc7262' },
				secondary: { main: '#d8a245' },
				success: { main: '#2bb032' },
				background: {
					default: '#0a1929',
					paper: '#001e3c',
				},
			},
		}),

		light: createTheme({
			palette: {
				mode: 'light',
				primary: { main: '#0a1929' },
				secondary: { main: '#001e3c' },
				success: { main: '#2bb032' },
				background: {
					default: '#aab4be',
					paper: '#fff',
				},
			},
		}),
	};

	return <MuiProvider theme={themes[theme]}>{children}</MuiProvider>;
};
