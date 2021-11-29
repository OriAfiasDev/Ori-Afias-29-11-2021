import { Dispatch } from 'react';
import { Action, reduxTypes } from '..';
import { Degrees } from '../reducers/degrees';

export const toggleDegrees = (currentDegrees: Degrees) => ({ type: reduxTypes.SET_DEGREES, payload: currentDegrees === 'celsius' ? 'fahrenheit' : 'celsius' });
