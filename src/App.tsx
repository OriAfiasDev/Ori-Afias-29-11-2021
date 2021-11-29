import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from './redux/selectors';
import { toggleTheme } from './redux/actions/theme';

function App() {
	const theme = useSelector(themeSelector);
	const dispatch = useDispatch();
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p onClick={() => dispatch(toggleTheme(theme))}>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					{theme}
				</a>
			</header>
		</div>
	);
}

export default App;
