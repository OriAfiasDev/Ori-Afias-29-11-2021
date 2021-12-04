import { combineReducers } from 'redux';
import { degreesReducer as degrees } from './reducers/degrees';
import { themeReducer as theme } from './reducers/theme';
import { selectedCityReducer as selectedCity } from './reducers/selectedCity';
import { favoritesReducer as favorites } from './reducers/favorites';

export interface Action<T> {
	type: string;
	payload: T;
}

export enum reduxTypes {
	SET_THEME = 'SET_THEME',
	SET_DEGREES = 'SET_DEGREES',
	SET_SELECTED_CITY = 'SET_SELECTED_CITY',
	ADD_FAVORITE = 'ADD_FAVORITE',
	REMOVE_FAVORITE = 'REMOVE_FAVORITE',
	CLEAR_FAVORITE = 'CLEAR_FAVORITE',
}

export default combineReducers({ degrees, theme, selectedCity, favorites });
