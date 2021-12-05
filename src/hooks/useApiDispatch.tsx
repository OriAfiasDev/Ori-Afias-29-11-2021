import { useSnackbar } from 'notistack';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reduxTypes } from '../redux';

export interface Response<T> {
	success: boolean;
	message: string;
	type: reduxTypes;
	data: T;
}

type AsyncFunc = () => Promise<Response<any>>;

type Status = 'loading' | 'finished' | 'not started' | 'failed';

interface Dispatch {
	status: Status;
	dispatch: (func: AsyncFunc) => void;
}

export const useApiDispatch = (): Dispatch => {
	const [status, setStatus] = useState<Status>('not started');
	const snackbar = useSnackbar();

	const defaultDispatch = useDispatch();

	const dispatch = useCallback(
		async (func: AsyncFunc) => {
			setStatus('loading');

			const { message, success, data, type } = await func();

			if (!success) {
				setStatus('failed');
				snackbar.enqueueSnackbar(message, { variant: 'error' });
			}

			defaultDispatch({ type, payload: data });
			setStatus('finished');
		},
		[defaultDispatch, snackbar]
	);

	return { status, dispatch };
};
