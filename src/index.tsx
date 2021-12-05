import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReduxProvider } from './Providers/ReduxProvider';
import { ThemeProvider } from './Providers/MuiTheme';
import { SnackbarProvider } from './Providers/SnackbarProvider';

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider>
			<ThemeProvider>
				<SnackbarProvider>
					<App />
				</SnackbarProvider>
			</ThemeProvider>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
