import { Action, reduxTypes, Theme } from '../../models/redux';

const defaultTheme: Theme = 'dark';

export const themeReducer = (state: Theme = defaultTheme, action: Action<null>) => {
	switch (action.type) {
		case reduxTypes.SET_THEME:
			return state === 'dark' ? 'light' : 'dark';
		default:
			return state;
	}
};
