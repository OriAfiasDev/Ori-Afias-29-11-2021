import { reduxTypes } from '..';
import { Favorite } from '../reducers/favorites';

export const addToFavorites = (payload: Favorite) => ({ type: reduxTypes.ADD_FAVORITE, payload });
export const removeFromFavorites = (payload: Favorite) => ({ type: reduxTypes.REMOVE_FAVORITE, payload });
export const clearFavorites = () => ({ type: reduxTypes.CLEAR_FAVORITE });
