import { Action, reduxTypes } from '..';

export type Degrees = 'C' | 'F';

export const degreesReducer = (state: Degrees = 'C', action: Action<null>) => {
	switch (action.type) {
		case reduxTypes.SET_DEGREES:
			return state === 'C' ? 'F' : 'C';
		default:
			return state;
	}
};
