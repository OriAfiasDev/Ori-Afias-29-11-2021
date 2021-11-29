import { combineReducers } from 'redux';
import { degreesReducer as degrees } from './reducers/degrees';
import { themeReducer as theme } from './reducers/theme';

export interface Action<T> {
	type: string;
	payload: T;
}

export enum reduxTypes {
	SET_THEME = 'SET_THEME',
	SET_DEGREES = 'SET_DEGREES',
}

export default combineReducers({ degrees, theme });
