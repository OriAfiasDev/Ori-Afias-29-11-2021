export interface DegreeSystem {
	sign: 'C' | 'F';
	system: 'Metric' | 'Imperial';
}

export type SelectedCity = { name: string; country: string; key: string };

export interface Favorite extends SelectedCity {
	currentWeather: { Metric: number; Imperial: number; icon: number | null; text: string };
}

export type Theme = 'dark' | 'light';

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
