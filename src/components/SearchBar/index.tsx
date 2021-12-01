import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { getLocationAutocomplete } from '../../api';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Dialog, Form } from './Search.styled';
import { SearchResults } from './SearchResults';
import { Box } from '@mui/system';
import { Input } from '../shared/Input';
import DialogContent from '@mui/material/DialogContent';

interface Props {
	searchTerm: string;
	setSearchTerm: (val: string) => void;
}

export const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [cities, setCities] = useState<{ name: string; country: string; key: string }[]>([]);
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

	const onResultSelected = (result: string) => {
		setSearchTerm(result);
		setDialogOpen(false);
	};

	return (
		<Box>
			{!dialogOpen && (
				<Button variant='outlined' startIcon={<SearchIcon />} onClick={openDialog}>
					{searchTerm || 'Find City'}
				</Button>
			)}
			<Dialog
				onClose={() => setDialogOpen(false)}
				open={dialogOpen}
				fullWidth
				maxWidth='sm'
				transitionDuration={300}
				PaperProps={{ sx: { bgcolor: 'transparent' } }}>
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
