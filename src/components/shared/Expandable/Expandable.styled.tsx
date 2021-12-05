import { Card, CardActions, IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Card)({ borderRadius: 10 });

export const Actions = styled(CardActions)({ paddingTop: 10, paddingBottom: 10 });

interface ExpandMoreProps extends IconButtonProps {
	open: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
	const { open, ...other } = props;
	return <IconButton {...other} />;
})(({ open }) => ({
	transform: !open ? 'rotate(0deg)' : 'rotate(180deg)',
	transition: 'transform 0.2s',
}));
