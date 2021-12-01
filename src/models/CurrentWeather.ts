import { Degrees } from '../redux/reducers/degrees';

export interface CurrentWeatherResult {
	LocalObservationDateTime: string;
	EpochTime: number;
	WeatherText: string; //possibly enum
	WeatherIcon: number; //possible enum
	HasPrecipitation: boolean;
	PrecipitationType: null; //???
	IsDayTime: boolean;
	Temperature: Temperature;
	MobileLink: string;
	Link: string;
}

interface Temperature {
	Metric: TemperatureValue;
	Imperial: TemperatureValue;
}

interface TemperatureValue {
	Value: number;
	Unit: Degrees;
	UnitType: number;
}
