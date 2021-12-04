import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReduxProvider } from './Providers/ReduxProvider';
import { ThemeProvider } from './Providers/MuiTheme';

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
