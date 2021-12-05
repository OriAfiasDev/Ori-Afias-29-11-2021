import { Action, Favorite, reduxTypes } from '../../models/redux';

const favorites: Favorite[] = JSON.parse(localStorage.getItem('fav') || '[]');

export const favoritesReducer = (state: Favorite[] = favorites, action: Action<Favorite>) => {
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
