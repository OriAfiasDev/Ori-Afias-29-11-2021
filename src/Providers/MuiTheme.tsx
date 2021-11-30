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
				primary: { main: '#0a1929' },
				secondary: { main: '#fff' },
				success: { main: '#2bb032' },
				background: {
					default: '#27293d',
					paper: '#27293d',
				},
			},
		}),

		light: createTheme({
			palette: {
				mode: 'light',
				primary: { main: '#edc210' },
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
