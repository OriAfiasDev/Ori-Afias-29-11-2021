import { Dispatch } from 'react';
import { Action, reduxTypes } from '..';
import { Theme } from '../reducers/theme';

export const toggleTheme = (currentTheme: Theme) => ({ type: reduxTypes.SET_THEME, payload: currentTheme === 'dark' ? 'light' : 'dark' });
