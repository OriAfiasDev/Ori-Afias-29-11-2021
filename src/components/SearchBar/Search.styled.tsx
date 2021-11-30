import { FormControl, List as MuiList, ListItem as MuiLI } from '@mui/material';
import { Box, styled } from '@mui/system';

export const Container = styled(Box)({ display: 'flex', flexDirection: 'column', margin: '10px 20px' });

export const Form = styled(FormControl)({ m: 1 });

export const ListContainer = styled(Box)({  });

export const List = styled(MuiList)({ bgcolor: 'background.paper' });

const NoHoverListItem = styled(MuiLI)(({theme}) =>({ backgroundColor: theme.palette.secondary, cursor: 'pointer', borderRadius: 10, transition: 'opacity 0.5s' }));

export const ListItem = styled(NoHoverListItem)`
    &:hover {
        opacity: 1;
    }
`