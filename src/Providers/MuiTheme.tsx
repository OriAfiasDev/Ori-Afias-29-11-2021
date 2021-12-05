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
				primary: { main: '#252c33', light: '#3a4750' },
				secondary: { main: '#f6c90e', light: '#ffe88a' },
				success: { main: '#2bb032' },
				background: {
					default: '#252c33',
					paper: '#0a1929',
				},
				text: { primary: '#eee', secondary: '#252c33' },
			},
		}),

		light: createTheme({
			palette: {
				mode: 'light',
				primary: { main: '#edc210', light: '#0a1929' },
				secondary: { main: '#001e3c' },
				success: { main: '#2bb032' },
				background: {
					default: '#aab4be',
					paper: '#fff',
				},
				text: { primary: '#252c33', secondary: '#fff' },
			},
		}),
	};

	return <MuiProvider theme={themes[theme]}>{children}</MuiProvider>;
};
