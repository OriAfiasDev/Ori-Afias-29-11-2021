import { Backdrop, BackdropProps, FormControl, List as MuiList, ListItem as MuiLI } from '@mui/material';
import { Box, styled } from '@mui/system';
import { ElementType } from 'react';

export const Container = styled(Box)({ display: 'flex', flexDirection: 'column', margin: '10px 20px' });

export const Form = styled(FormControl)({ m: 1 });

export const ListContainer = styled(Box)({  });

export const List = styled(MuiList)({ bgcolor: 'background.paper' });

export const BlurredBackdrop: ElementType<BackdropProps<"span", {}>> = styled(Backdrop)({backdropFilter: 'blur(1px)'});

export const BlurredBackdrop1 = styled(Backdrop, { name: 'MuiModal', slot: 'Backdrop', overridesResolver: (props, styles) => { return styles.backdrop; }, })({ backdropFilter: 'blur(1px)' })

const NoHoverListItem = styled(MuiLI)(({theme}) =>({ backgroundColor: theme.palette.secondary, cursor: 'pointer', borderRadius: 10, transition: 'opacity 0.5s' }));

export const ListItem = styled(NoHoverListItem)`
    &:hover {
        opacity: 1;
    }
`