import { combineReducers } from 'redux';
import { degreesReducer as degrees } from './reducers/degrees';
import { themeReducer as theme } from './reducers/theme';
import { selectedCityReducer as selectedCity } from './reducers/selectedCity';

export interface Action<T> {
	type: string;
	payload: T;
}

export enum reduxTypes {
	SET_THEME = 'SET_THEME',
	SET_DEGREES = 'SET_DEGREES',
	SET_SELECTED_CITY = 'SET_SELECTED_CITY',
}

export default combineReducers({ degrees, theme, selectedCity });
