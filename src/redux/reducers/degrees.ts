import { Action, reduxTypes } from '..';

export type Degrees = 'celsius' | 'fahrenheit';

export const degreesReducer = (state: Degrees = 'celsius', action: Action<null>) => {
	switch (action.type) {
		case reduxTypes.SET_DEGREES:
			return state === 'celsius' ? 'fahrenheit' : 'celsius';
		default:
			return state;
	}
};
