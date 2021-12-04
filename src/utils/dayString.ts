export const getDayString = (dayValue: number) => {
	switch (dayValue) {
		case 0:
			return 'SUNDAY';
		case 1:
			return 'MONDAY';
		case 2:
			return 'TUESDAY';
		case 3:
			return 'WEDNSDAY';
		case 4:
			return 'THURSDAY';
		case 5:
			return 'FRIDAY';
		case 6:
			return 'SATURDAY';
	}
};
