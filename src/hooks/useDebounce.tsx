import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 400;

export const useDebounce = (value: string) => {
	const [debounced, setDebounced] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounced(value);
		}, DEFAULT_DELAY);

		return () => clearTimeout(handler);
	}, [value]);

	return debounced;
};
