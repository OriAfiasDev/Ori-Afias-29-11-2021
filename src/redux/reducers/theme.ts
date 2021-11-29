import { Action, reduxTypes } from '..';

export type Theme = 'dark' | 'light';

export const themeReducer = (state: Theme = 'dark', action: Action<Theme>) => {
	switch (action.type) {
		case reduxTypes.SET_THEME:
			return action.payload;
		default:
			return state;
	}
};
