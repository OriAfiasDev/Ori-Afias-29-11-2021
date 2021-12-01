import { Degrees } from './reducers/degrees';
import { SelectedCity } from './reducers/selectedCity';
import { Theme } from './reducers/theme';

interface State {
	theme: Theme;
	degrees: Degrees;
	selectedCity: SelectedCity;
}

export const themeSelector = (state: State) => state.theme;
export const degreesSelector = (state: State) => state.degrees;
export const selectedCitySelector = (state: State) => state.selectedCity;
