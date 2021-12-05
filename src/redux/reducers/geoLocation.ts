import { Action, Coords, reduxTypes } from '../../models/redux';

export const coordsReducer = (state: Coords = { latitude: 0, longitude: 0 }, action: Action<Coords>) => {
	switch (action.type) {
		case reduxTypes.SET_COORDS:
			return action.payload;
		default:
			return state;
	}
};
