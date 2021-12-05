import { useEffect, useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '../../hooks/useDebounce';
import { getLocationAutocomplete } from '../../api';
import { Dialog, Form } from './Search.styled';
import { SearchResults } from './SearchResults';
import { Input } from '../shared/Input';
import { AutoCompleteResult } from '../../models/LocationAutoComplete';
import { useDispatch } from 'react-redux';
import { setSelectedCity } from '../../redux/actions/selectedCity';
import { useSnackbar } from 'notistack';

export const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState<boolean>(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [cities, setCities] = useState<AutoCompleteResult[]>([]);
	const debounced = useDebounce(searchTerm);
	const dispatch = useDispatch();
	const snackbar = useSnackbar();

	useEffect(() => {
		(async () => {
			if (searchTerm) {
				setLoading(true);
				const cities = await getLocationAutocomplete(debounced);
				if (!cities) return snackbar.enqueueSnackbar('Oops, We could not fetch results. please try again later', { variant: 'error' });
				setCities(cities);
				setLoading(false);
			} else {
				setCities([]);
				setLoading(false);
			}
		})();
		// eslint-disable-next-line
	}, [debounced]);

	useEffect(() => {
		setLoading(searchTerm !== debounced);
	}, [searchTerm, debounced]);

	const openDialog = () => {
		setDialogOpen(true);
	};

	const onResultSelected = async (result: AutoCompleteResult) => {
		setSearchTerm(result.LocalizedName);
		dispatch(setSelectedCity({ country: result.Country.ID, key: result.Key, name: result.LocalizedName }));
		setDialogOpen(false);
	};

	return (
		<Box>
			<Button
				sx={{ width: '100%', py: 1, bgcolor: 'secondary.main', color: 'text.secondary' }}
				variant='contained'
				startIcon={<SearchIcon />}
				onClick={openDialog}>
				{searchTerm || 'Find City'}
			</Button>

			<Dialog onClose={() => setDialogOpen(false)} open={dialogOpen} fullWidth maxWidth='sm' transitionDuration={500}>
				<DialogContent>
					<Form variant='outlined' color='secondary'>
						<Input Icon={SearchIcon} label='Find City' value={searchTerm} setValue={setSearchTerm} loading={loading} onClick={openDialog} />
					</Form>
					<SearchResults results={cities} onResultClicked={onResultSelected} />
				</DialogContent>
			</Dialog>
		</Box>
	);
};
