import { reduxTypes } from '..';
import { SelectedCity } from '../reducers/selectedCity';

export const setSelectedCity = (payload: SelectedCity) => ({ type: reduxTypes.SET_SELECTED_CITY, payload });
