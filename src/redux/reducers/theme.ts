import { Action, reduxTypes } from '..';

export type Theme = 'dark' | 'light';

export const themeReducer = (state: Theme = 'dark', action: Action<null>) => {
	switch (action.type) {
		case reduxTypes.SET_THEME:
			return state === 'dark' ? 'light' : 'dark';
		default:
			return state;
	}
};
