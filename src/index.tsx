import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReduxProvider } from './Providers/ReduxProvider';
import { ThemeProvider } from './Providers/MuiTheme';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider>
			<ThemeProvider>
				<Router>
					<App />
				</Router>
			</ThemeProvider>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
