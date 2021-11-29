import { Action, reduxTypes } from '..';

export type Degrees = 'celsius' | 'fahrenheit';

export const degreesReducer = (state: Degrees = 'celsius', action: Action<Degrees>) => {
	switch (action.type) {
		case reduxTypes.SET_DEGREES:
			return action.payload;
		default:
			return state;
	}
};
