import { DegreeSystem } from './reducers/degrees';
import { Favorite } from './reducers/favorites';
import { SelectedCity } from './reducers/selectedCity';
import { Theme } from './reducers/theme';

interface State {
	theme: Theme;
	degrees: DegreeSystem;
	selectedCity: SelectedCity;
	favorites: Favorite[];
}

export const themeSelector = (state: State) => state.theme;
export const degreesSelector = (state: State) => state.degrees;
export const selectedCitySelector = (state: State) => state.selectedCity;
export const favoritesSelector = (state: State) => state.favorites;
