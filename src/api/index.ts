import axios from 'axios';
import { AutoCompleteResult } from '../models/LocationAutoComplete';
import apikey from './apiKey';
import mockAutoComplete from '../mock/autoCompleteResult.json';

const baseUrl = 'http://dataservice.accuweather.com/';
const version = '/v1';

const api = axios.create({
	baseURL: 'http://dataservice.accuweather.com/',
	params: { apikey, language: 'en-us' },
});

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
