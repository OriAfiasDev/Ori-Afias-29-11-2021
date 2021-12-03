import { Avatar, Divider, ListItemAvatar, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { AutoCompleteResult } from '../../models/LocationAutoComplete';
import { List, ListItem } from './Search.styled';

interface Props {
	results: AutoCompleteResult[];
	onResultClicked: (chosen: string) => void;
}
export const SearchResults: React.FC<Props> = ({ results, onResultClicked }) => {
	return (
		<Box>
			<List>
				{results.map(res => (
					<ResultItem result={res} onResultClicked={onResultClicked} key={res.Key} />
				))}
			</List>
		</Box>
	);
};

interface ResultItemProps {
	result: AutoCompleteResult;
	onResultClicked: (chosen: string) => void;
}
const ResultItem: React.FC<ResultItemProps> = ({ result, onResultClicked }) => (
	<div onClick={() => onResultClicked(result.Key)}>
		<ListItem>
			<ListItemAvatar>
				<Avatar variant='rounded' sx={{ color: 'text.primary' }}>
					{result.Country.ID}
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={result.LocalizedName} />
		</ListItem>
		<Divider variant='inset' />
	</div>
);
