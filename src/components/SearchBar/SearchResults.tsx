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
					<div onClick={() => onResultClicked(res.Key)} key={res.Key}>
						<ListItem>
							<ListItemAvatar>
								<Avatar variant='rounded' sx={{ color: 'text.primary' }}>
									{res.Country.ID}
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={res.LocalizedName} />
						</ListItem>
						<Divider variant='inset' />
					</div>
				))}
			</List>
		</Box>
	);
};
