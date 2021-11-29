import { Degrees } from './reducers/degrees';
import { Theme } from './reducers/theme';

interface State {
	theme: Theme;
	degrees: Degrees;
}

export const themeSelector = (state: State) => state.theme;
