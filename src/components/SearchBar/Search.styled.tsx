import { FormControl, List as MuiList, ListItem as MuiLI, Dialog as MuiDialog } from '@mui/material';
import { styled } from '@mui/system';

export const Form = styled(FormControl)({ width: '100%' });

export const List = styled(MuiList)({ bgcolor: 'background.paper' });

export const ListItemNoHover = styled(MuiLI)(({ theme }) => ({
	backgroundColor: theme.palette.secondary,
	cursor: 'pointer',
	borderRadius: 10,
}));

export const ListItem = styled(ListItemNoHover)`
	&:hover {
		background-color: #ccc;
	}
`;

export const Dialog = styled(MuiDialog)({ flex: 1, alignItems: 'flex-start', alignContent: 'flex-start', alignSelf: 'flex-start' });
