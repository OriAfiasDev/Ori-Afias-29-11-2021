import axios from 'axios';
import { AutoCompleteResult } from '../models/LocationAutoComplete';
import { CurrentWeatherResult } from '../models/CurrentWeather';
import apikey from './apiKey';
import { DailyForecast } from '../models/DailyForecast';
import { CityFromGeoLocation } from '../models/CityFromGeoLocation';

const baseUrl = 'http://dataservice.accuweather.com';
const version = 'v1';

const api = axios.create({
	baseURL: baseUrl,
	params: { apikey, language: 'en-us' },
});

export const getCurrentWeatherByCoords = async (longitude: number, latitude: number): Promise<CityFromGeoLocation | null> => {
	try {
		const { data, status } = await api.get(`/locations/${version}/cities/geoposition/search?q=${latitude},${longitude}`);
		return status === 200 ? data : null;
	} catch {
		return null;
	}
};

export const getDailyForecast = async (locationKey: string, metric: boolean): Promise<DailyForecast | null> => {
	try {
		const { data, status } = await api.get(`/forecasts/${version}/daily/5day/${locationKey}?metric=${metric}`);
		return status === 200 ? data : null;
	} catch {
		return null;
	}
};

export const getCurrentWeather = async (locationKey: string): Promise<CurrentWeatherResult[] | null> => {
	try {
		const { data, status } = await api.get(`/currentconditions/${version}/${locationKey}?details=true`);
		return status === 200 ? data : null;
	} catch {
		return null;
	}
};

export const getLocationAutocomplete = async (searchTerm: string): Promise<AutoCompleteResult[] | null> => {
	try {
		const { data } = await api.get<AutoCompleteResult[]>(`locations/${version}/cities/autocomplete?q=${searchTerm}`);
		return data.filter(found => found.LocalizedName.toLowerCase().includes(searchTerm.toLowerCase()));
	} catch {
		return null;
	}
};
