import { Toolbar as MuiToolbar } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Logo as DefaultLogo } from '../shared/Logo';

export const Logo = styled(DefaultLogo)({});

export const HeaderContainer = styled(Box)({ flexGrow: 1 });

export const Toolbar = styled(MuiToolbar)({ justifyContent: 'space-between' });
