import { Action, reduxTypes, SelectedCity } from '../../models/redux';

const telAviv: SelectedCity = { name: 'Tel Aviv', country: 'IL', key: '215854' };

export const selectedCityReducer = (state: SelectedCity = telAviv, action: Action<SelectedCity>) => {
	switch (action.type) {
		case reduxTypes.SET_SELECTED_CITY:
			return action.payload;
		default:
			return state;
	}
};
