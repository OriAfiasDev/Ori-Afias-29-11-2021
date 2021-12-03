export interface CurrentWeatherResult {
	LocalObservationDateTime: string;
	EpochTime: number;
	WeatherText: string;
	WeatherIcon: number | null;
	HasPrecipitation: boolean;
	PrecipitationType: PrecipitationType;
	IsDayTime: boolean;
	Temperature: Temperature<TemperatureValue>;
	RealFeelTemperature: Temperature<DetailedTemperatureValue>;
	RealFeelTemperatureShade: Temperature<DetailedTemperatureValue>;
	RelativeHumidity: number;
	DewPoint: Temperature<TemperatureValue>;
	Wind: Wind;
	WindGust: { Speed: Temperature<TemperatureValue> };
	UVIndex: number;
	UVIndexText: string;
	Visibility: Temperature<TemperatureValue>;
	ObstructionsToVisibility: string;
	CloudCover: number;
	Ceiling: Temperature<TemperatureValue>;
	Pressure: Temperature<TemperatureValue>;
	PressureTendency: { LocalizedText: string; Code: string };
	Past24HourTemperatureDeparture: Temperature<TemperatureValue>;
	ApparentTemperature: Temperature<TemperatureValue>;
	WindChillTemperature: Temperature<TemperatureValue>;
	WetBulbTemperature: Temperature<TemperatureValue>;
	Precip1hr: Temperature<TemperatureValue>;
	PrecipitationSummary: PrecipitationSummary;
	TemperatureSummary: TemperatureSummary;

	MobileLink: string;
	Link: string;
}

type PrecipitationType = 'Rain' | 'Snow' | 'Ice' | 'Mixed' | null;

export interface Temperature<T> {
	Metric: T;
	Imperial: T;
}

export interface TemperatureValue {
	Value: number;
	Unit: string;
	UnitType: number;
}

interface DetailedTemperatureValue extends TemperatureValue {
	Phrase: string;
}

interface Wind {
	Direction: {
		Degrees: number;
		Localized: string;
		English: string;
	};
	Speed: Temperature<TemperatureValue>;
}

interface PrecipitationSummary {
	Precipitation: Temperature<TemperatureValue>;
	PastHour: Temperature<TemperatureValue>;
	Past3Hours: Temperature<TemperatureValue>;
	Past6Hours: Temperature<TemperatureValue>;
	Past9Hours: Temperature<TemperatureValue>;
	Past12Hours: Temperature<TemperatureValue>;
	Past18Hours: Temperature<TemperatureValue>;
	Past24Hours: Temperature<TemperatureValue>;
}

interface TemperatureSummary {
	Past6HourRange: { Minimum: Temperature<TemperatureValue>; Maximum: Temperature<TemperatureValue> };
	Past12HourRange: { Minimum: Temperature<TemperatureValue>; Maximum: Temperature<TemperatureValue> };
	Past24HourRange: { Minimum: Temperature<TemperatureValue>; Maximum: Temperature<TemperatureValue> };
}
