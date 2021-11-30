import { FormControl, List as MuiList, ListItem as MuiLI } from '@mui/material';
import { Box, styled } from '@mui/system';

export const Container = styled(Box)({ display: 'flex', flexDirection: 'column', width: '100%' });

export const Form = styled(FormControl)({ m: 1 });

export const ListContainer = styled(Box)({ borderRadius: 10 });

export const List = styled(MuiList)({ bgcolor: 'background.paper' });

export const ListItem = styled(MuiLI)({ backgroundColor: '#eee', cursor: 'pointer', opacity: 0.7 });
