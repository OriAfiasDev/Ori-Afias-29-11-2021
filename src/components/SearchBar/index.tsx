import { useEffect, useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '../../hooks/useDebounce';
import { getCurrentWeather, getLocationAutocomplete } from '../../api';
import { Dialog, Form } from './Search.styled';
import { SearchResults } from './SearchResults';
import { Input } from '../shared/Input';
import { AutoCompleteResult } from '../../models/LocationAutoComplete';

interface Props {
	searchTerm: string;
	setSearchTerm: (val: string) => void;
}

export const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [cities, setCities] = useState<AutoCompleteResult[]>([]);
	const debounced = useDebounce(searchTerm);

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
		// eslint-disable-next-line
	}, [debounced]);

	useEffect(() => {
		setLoading(searchTerm !== debounced);
	}, [searchTerm, debounced]);

	const openDialog = () => {
		setDialogOpen(true);
	};

	const onResultSelected = async (result: string) => {
		// setSearchTerm(result);
		const res = await getCurrentWeather(result);
		console.log(res);
		setDialogOpen(false);
	};

	return (
		<Box>
			<Button sx={{ width: '100%' }} variant='outlined' startIcon={<SearchIcon />} onClick={openDialog}>
				{searchTerm || 'Find City'}
			</Button>

			<Dialog onClose={() => setDialogOpen(false)} open={dialogOpen} fullWidth maxWidth='sm' transitionDuration={500}>
				<DialogContent>
					<Form variant='outlined'>
						<Input Icon={SearchIcon} label='Find City' value={searchTerm} setValue={setSearchTerm} loading={loading} onClick={openDialog} />
					</Form>
					<SearchResults results={cities} onResultClicked={onResultSelected} />
				</DialogContent>
			</Dialog>
		</Box>
	);
};
