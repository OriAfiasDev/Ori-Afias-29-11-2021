import { Action, reduxTypes } from '..';

export type SelectedCity = { name: string; country: string; key: string };

const telAviv = { name: 'Tel Aviv', country: 'IL', key: '215854' };

export const selectedCityReducer = (state: SelectedCity = telAviv, action: Action<SelectedCity>) => {
	switch (action.type) {
		case reduxTypes.SET_SELECTED_CITY:
			return action.payload;
		default:
			return state;
	}
};
