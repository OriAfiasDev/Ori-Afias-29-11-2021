import { Avatar, Divider, ListItemAvatar, ListItemText } from '@mui/material';
import { List, ListContainer, ListItem } from './Search.styled';

interface Props {
	results: { name: string; country: string; key: string }[];
	onResultClicked: (chosen: string) => void;
}
export const SearchResults: React.FC<Props> = ({ results, onResultClicked }) => {
	return (
		<ListContainer>
			<List>
				{results.map(res => (
					<>
						<ListItem key={res.key}>
							<ListItemAvatar>
								<Avatar>{res.country}</Avatar>
							</ListItemAvatar>
							<ListItemText primary={res.name} />
						</ListItem>
						<Divider variant='inset' />
					</>
				))}
			</List>
		</ListContainer>
	);
};
