import { DailyForecast } from '../../models/DailyForecast';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface Props {
	dailyForecast: DailyForecast;
}

export const FiveDaysChart: React.FC<Props> = ({ dailyForecast }) => {
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
	const options: ChartOptions<'line'> = { plugins: { legend: { display: false } }, responsive: true, scales: { y: { beginAtZero: true } } };
	const chartLabels = dailyForecast.DailyForecasts.map(day => new Date(day.Date).toLocaleDateString('he-IL'));
	const chartData: ChartData<'line', number[], string> = {
		labels: chartLabels,
		datasets: [
			{
				label: 'Min Temp',
				data: dailyForecast.DailyForecasts.map(day => day.Temperature.Minimum.Value),
				fill: true,
				borderColor: 'rgba(75,192,192,1)',
				backgroundColor: 'rgba(75,192,192,0.1)',
				tension: 0.3,
			},
			{
				label: 'Max Temp',
				data: dailyForecast.DailyForecasts.map(day => day.Temperature.Maximum.Value),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				tension: 0.3,
				fill: false,
			},
		],
	};

	return <Line data={chartData} options={options} />;
};
