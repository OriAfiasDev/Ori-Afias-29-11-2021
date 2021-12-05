interface Props {
	iconNumber: number | null;
	alt: string;
}
export const WeatherIcon: React.FC<Props> = ({ iconNumber, alt }) => <img src={`../../assets/icons/${iconNumber || 'default'}.png`} alt={alt} />;
