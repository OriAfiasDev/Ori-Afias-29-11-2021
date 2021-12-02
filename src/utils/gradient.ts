export const getGradientByWeather = (variant: 'hot' | 'cold') => {
	const colors = {
		hot: ['#ffd500', '#ffb300', '#ff4d00'],
		cold: ['#00d4ff', '#090979', '#020024'],
	};

	return `linear-gradient(90deg, ${colors[variant][0]} 0%, ${colors[variant][1]} 50%, ${colors[variant][2]} 100%)`;
};
