import axios from 'axios';
import { AutoCompleteResult } from '../models/LocationAutoComplete';
import { CurrentWeatherResult } from '../models/CurrentWeather';
import apikey from './apiKey';
import mockAutoComplete from '../mock/autoCompleteResult.json';
import mockCurrentWeather from '../mock/currentWeatherResult.json';
import mockDailyForecast from '../mock/dailyForecastResult.json';
import { DailyForecast } from '../models/DailyForecast';

const baseUrl = 'http://dataservice.accuweather.com';
const version = 'v1';

const api = axios.create({
	baseURL: baseUrl,
	params: { apikey, language: 'en-us' },
});

interface Response<T> {
	success: boolean;
	data: T;
	message: string;
}

export const getDailyForecast = async (locationKey: string, metric: boolean): Promise<DailyForecast> => {
	// const { data } = await api.get(`/forecasts/${version}/daily/5day/${locationKey}?metric=${metric}`);
	// console.log(data);
	// return data;
	return mockDailyForecast;
};

export const getCurrentWeather = async (locationKey: string): Promise<CurrentWeatherResult[]> => {
	// const { data } = await api.get(`/currentconditions/${version}/${locationKey}?details=true`);
	// console.log(data);
	// return data;
	return mockCurrentWeather;
};

export const getLocationAutocomplete = async (searchTerm: string): Promise<AutoCompleteResult[]> => {
	try {
		// const { data } = await api.get<AutoCompleteResult[]>(`locations/${version}/cities/autocomplete?q=${searchTerm}`);
		const data = mockAutoComplete;
		return data.filter(found => found.LocalizedName.toLowerCase().includes(searchTerm.toLowerCase()));
		// .map(found => ({ name: found.LocalizedName, country: found.Country.ID, key: found.Key }));
	} catch {
		return [mockAutoComplete[4]];
	}
};
