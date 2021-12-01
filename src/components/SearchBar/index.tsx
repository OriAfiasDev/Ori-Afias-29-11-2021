import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { getLocationAutocomplete } from '../../api';
import { CircularProgress, Dialog, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { BlurredBackdrop, Container, Form } from './Search.styled';
import { SearchResults } from './SearchResults';

interface Props {
	searchTerm: string;
	setSearchTerm: (val: string) => void;
}

export const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [dialogOpen, setDialogOpen] = useState(false)
	const [cities, setCities] = useState<{ name: string; country: string; key: string }[]>([]);
	const debounced = useDebounce(searchTerm);
	const ref = useRef<MutableRefObject<HTMLInputElement>>(null!)
	
	const openDialog = () => {
		setDialogOpen(true)
		setTimeout(() => {

			ref.current.focus()
		}, [500])
	}

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
		<>
		<Container>
			<Form variant='outlined'>
				<InputLabel htmlFor='search-bar2'>Find City</InputLabel>
				<OutlinedInput onClick={openDialog} autoComplete='none'
				
					label='Find City'
					id='search-bar2'
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
		<Dialog onClose={() => setDialogOpen(false)} BackdropComponent={BlurredBackdrop} open={dialogOpen || !!searchTerm} fullWidth maxWidth='sm' transitionDuration={300} PaperProps={{sx: { bgcolor: 'transparent'}}} >
		<Container>
			<Form variant='outlined'>
				<InputLabel htmlFor='search-bar'>Find City</InputLabel>
				<OutlinedInput 
				ref={ref}
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
					</>
	);
};
