import { Card, CardActions, CardContent, IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Card)({ borderRadius: 10, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 1px 5px' });

export const Content = styled(CardContent)({ paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 });

export const Actions = styled(CardActions)({ paddingTop: 10, paddingBottom: 10 });

interface ExpandMoreProps extends IconButtonProps {
	open: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
	const { open, ...other } = props;
	return <IconButton {...other} />;
})(({ open }) => ({
	transform: !open ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: 'transform 0.2s',
}));