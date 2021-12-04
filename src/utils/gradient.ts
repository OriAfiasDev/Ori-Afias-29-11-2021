export const getGradientByWeather = (variant: 'hot' | 'cold') => {
	const colors = {
		hot: ['#fff', '#fff', '#fbf3e8'],
		cold: ['#00d4ff', '#090979', '#020024'],
	};

	return `linear-gradient(90deg, ${colors[variant][0]} 0%, ${colors[variant][1]} 75%, ${colors[variant][2]} 100%)`;
};

export const DEGREE_SIGN = '°';
