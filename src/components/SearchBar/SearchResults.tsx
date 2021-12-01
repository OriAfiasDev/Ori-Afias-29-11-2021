import { Avatar, Divider, ListItemAvatar, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { List, ListItem } from './Search.styled';

interface Props {
	results: { name: string; country: string; key: string }[];
	onResultClicked: (chosen: string) => void;
}
export const SearchResults: React.FC<Props> = ({ results, onResultClicked }) => {
	return (
		<Box>
			<List>
				{results.map(res => (
					<div onClick={() => onResultClicked(res.key)} key={res.key}>
						<ListItem>
							<ListItemAvatar>
								<Avatar>{res.country}</Avatar>
							</ListItemAvatar>
							<ListItemText primary={res.name} />
						</ListItem>
						<Divider variant='inset' />
					</div>
				))}
			</List>
		</Box>
	);
};
