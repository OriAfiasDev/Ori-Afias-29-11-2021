import { Action, reduxTypes } from '..';
import { SelectedCity } from './selectedCity';

export interface Favorite extends SelectedCity {
	currentWeather: { Metric: number; Imperial: number; icon: number | null; text: string };
}

export const favoritesReducer = (state: Favorite[] = JSON.parse(localStorage.getItem('fav') || '[]'), action: Action<Favorite>) => {
	let updatedState = state;
	switch (action.type) {
		case reduxTypes.ADD_FAVORITE:
			updatedState = [...state, action.payload];
			localStorage.setItem('fav', JSON.stringify(updatedState));
			return updatedState;
		case reduxTypes.REMOVE_FAVORITE:
			updatedState = state.filter(fav => fav.key !== action.payload.key);
			localStorage.setItem('fav', JSON.stringify(updatedState));
			return updatedState;
		case reduxTypes.CLEAR_FAVORITE:
			localStorage.setItem('fav', '[]');
			return [];
		default:
			return state;
	}
};
