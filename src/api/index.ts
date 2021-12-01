import axios from 'axios';
import { AutoCompleteResult } from '../models/LocationAutoComplete';
import apikey from './apiKey';
import mockAutoComplete from '../mock/autoCompleteResult.json';
import mockCurrentWeather from '../mock/currentWeatherResult.json';

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

export const getCurrentWeather = async (locationKey: string) => {
	// const { data } = await api.get(`/currentconditions/${version}/${locationKey}`);
	return mockCurrentWeather;
};

export const getLocationAutocomplete = async (searchTerm: string): Promise<{ name: string; country: string; key: string }[]> => {
	try {
		// const { data } = await api.get<AutoCompleteResult[]>(`locations/${version}/cities/autocomplete?q=${searchTerm}`);
		const data = mockAutoComplete;
		return data
			.filter(found => found.LocalizedName.toLowerCase().includes(searchTerm.toLowerCase()))
			.map(found => ({ name: found.LocalizedName, country: found.Country.ID, key: found.Key }));
	} catch {
		return [{ name: 'Tel Aviv', country: 'IL', key: '215854' }];
	}
};
