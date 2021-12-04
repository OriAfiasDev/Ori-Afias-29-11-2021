import { Action, reduxTypes } from '..';

export interface Favorite {
	name: string;
	Key: string;
	currentWeather: { Metric: number; Imperial: number };
}

export const favoritesReducer = (state: Favorite[] = JSON.parse(localStorage.getItem('fav') || '[]'), action: Action<Favorite>) => {
	let updatedState = state;
	switch (action.type) {
		case reduxTypes.ADD_FAVORITE:
			updatedState = [...state, action.payload];
			localStorage.setItem('fav', JSON.stringify(updatedState));
			return updatedState;
		case reduxTypes.REMOVE_FAVORITE:
			updatedState = state.filter(fav => fav.Key !== action.payload.Key);
			localStorage.setItem('fav', JSON.stringify(updatedState));
			return updatedState;
		case reduxTypes.CLEAR_FAVORITE:
			localStorage.setItem('fav', '[]');
			return [];
		default:
			return state;
	}
};
