import { Action, reduxTypes } from '..';

export interface DegreeSystem {
	sign: 'C' | 'F';
	system: 'Metric' | 'Imperial';
}

const imperial = { sign: 'F', system: 'Imperial' };
const metric = { sign: 'C', system: 'Metric' };

export const degreesReducer = (state: DegreeSystem = { sign: 'C', system: 'Metric' }, action: Action<null>) => {
	switch (action.type) {
		case reduxTypes.SET_DEGREES:
			return state.sign === 'C' ? imperial : metric;
		default:
			return state;
	}
};
