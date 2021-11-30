import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { getLocationAutocomplete } from '../../api';
import { CircularProgress, Dialog, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Form } from './Search.styled';
import { SearchResults } from './SearchResults';

interface Props {
	searchTerm: string;
	setSearchTerm: (val: string) => void;
}

export const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [cities, setCities] = useState<{ name: string; country: string; key: string }[]>([]);
	const debounced = useDebounce(searchTerm);

	useEffect(() => {
		setLoading(searchTerm !== debounced);
	}, [searchTerm]);

	useEffect(() => {
		(async () => {
			if (searchTerm) {
				setLoading(true);
				const cities = await getLocationAutocomplete(debounced);
				setCities(cities);
				setLoading(false);
			} else {
				setCities([]);
				setLoading(false);
			}
		})();
	}, [debounced]);
	
	return (
		<Dialog open fullWidth maxWidth='sm' transitionDuration={300} PaperProps={{sx: { bgcolor: 'transparent'}}} >
		<Container>
			<Form variant='outlined'>
				<InputLabel htmlFor='search-bar'>Find City</InputLabel>
				<OutlinedInput
					label='Find City'
					id='search-bar'
					type='text'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton edge='end'>{loading ? <CircularProgress color='secondary' size={18} /> : <SearchIcon />}</IconButton>
						</InputAdornment>
					}
					/>
			</Form>
			<SearchResults results={cities} onResultClicked={console.log} />
		</Container>
					</Dialog>
	);
};
