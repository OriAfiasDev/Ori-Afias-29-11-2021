import { reduxTypes, SelectedCity } from '../../models/redux';

export const setSelectedCity = (payload: SelectedCity) => ({ type: reduxTypes.SET_SELECTED_CITY, payload });
