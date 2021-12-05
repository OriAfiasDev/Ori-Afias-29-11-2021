import { Action, DegreeSystem, reduxTypes } from '../../models/redux';

const imperial: DegreeSystem = { sign: 'F', system: 'Imperial' };
const metric: DegreeSystem = { sign: 'C', system: 'Metric' };

export const degreesReducer = (state: DegreeSystem = { sign: 'C', system: 'Metric' }, action: Action<null>) => {
	switch (action.type) {
		case reduxTypes.SET_DEGREES:
			return state.sign === 'C' ? imperial : metric;
		default:
			return state;
	}
};
