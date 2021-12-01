import { Degrees } from '../redux/reducers/degrees';

export interface CurrentWeatherResult {
	LocalObservationDateTime: string;
	EpochTime: number;
	WeatherText: string;
	WeatherIcon: number | null;
	HasPrecipitation: boolean;
	PrecipitationType: PrecipitationType;
	IsDayTime: boolean;
	Temperature: Temperature;
	MobileLink: string;
	Link: string;
}

type PrecipitationType = 'Rain' | 'Snow' | 'Ice' | 'Mixed' | null;

interface Temperature {
	Metric: TemperatureValue;
	Imperial: TemperatureValue;
}

interface TemperatureValue {
	Value: number;
	Unit: string;
	UnitType: number;
}
