import { TemperatureValue } from './CurrentWeather';

export interface DailyForecast {
	Headline: Headline;
	DailyForecasts: Forecast[];
}

interface Headline {
	EffectiveDate: string;
	EffectiveEpochDate: number;
	Severity: number;
	Text: string;
	Category: string;
	EndDate: string;
	EndEpochDate: number;
	MobileLink: string;
	Link: string;
}

interface Forecast {
	Date: string;
	EpochDate: number;
	Temperature: { Minimum: TemperatureValue; Maximum: TemperatureValue };
	Day: Info;
	Night: Info;
	Sources: string[];
	MobileLink: string;
	Link: string;
}

interface Info {
	Icon: number;
	IconPhrase: string;
	HasPrecipitation: boolean;
}
