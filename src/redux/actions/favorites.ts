import { Favorite, reduxTypes } from '../../models/redux';

export const addToFavorites = (payload: Favorite) => ({ type: reduxTypes.ADD_FAVORITE, payload });
export const removeFromFavorites = (payload: Favorite) => ({ type: reduxTypes.REMOVE_FAVORITE, payload });
export const clearFavorites = () => ({ type: reduxTypes.CLEAR_FAVORITE });
