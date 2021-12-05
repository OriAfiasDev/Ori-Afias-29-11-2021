import { combineReducers } from 'redux';
import { degreesReducer as degrees } from './reducers/degrees';
import { themeReducer as theme } from './reducers/theme';
import { selectedCityReducer as selectedCity } from './reducers/selectedCity';
import { favoritesReducer as favorites } from './reducers/favorites';
import { coordsReducer as coords } from './reducers/geoLocation';

export default combineReducers({ degrees, theme, selectedCity, favorites, coords });
