import { Coords, DegreeSystem, Favorite, SelectedCity, Theme } from '../models/redux';

interface State {
	theme: Theme;
	degrees: DegreeSystem;
	selectedCity: SelectedCity;
	favorites: Favorite[];
	coords: Coords;
}

export const themeSelector = (state: State) => state.theme;
export const degreesSelector = (state: State) => state.degrees;
export const selectedCitySelector = (state: State) => state.selectedCity;
export const favoritesSelector = (state: State) => state.favorites;
export const coordsSelector = (state: State) => state.coords;
