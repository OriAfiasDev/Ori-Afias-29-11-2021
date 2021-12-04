import { CardContent, Collapse } from '@mui/material';
import { useState } from 'react';
import { Container, ExpandMore, Actions } from './Expandable.styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
	beforeCollapse?: React.ReactNode;
	insideCollapse?: React.ReactNode;
	moreActions?: React.ReactNode;
	defaultClosed?: boolean;
	sx?: { container?: any; beforeCollapse?: any; insideCollapse?: any };
}

export const Expandable: React.FC<Props> = ({ beforeCollapse, insideCollapse, defaultClosed, moreActions, sx }) => {
	const [open, setOpen] = useState(!defaultClosed);

	const toggleOpen = () => setOpen(cur => !cur);

	return (
		<Container sx={{ backgroundColor: 'primary.light', boxShadow: 3, ...sx?.container }}>
			<CardContent sx={sx?.beforeCollapse}>{beforeCollapse}</CardContent>
			{insideCollapse && (
				<Collapse in={open} timeout='auto'>
					<CardContent sx={sx?.insideCollapse}>{insideCollapse}</CardContent>
				</Collapse>
			)}

			<Actions>
				{insideCollapse && (
					<ExpandMore open={open} onClick={toggleOpen}>
						<ExpandMoreIcon />
					</ExpandMore>
				)}
				{moreActions}
			</Actions>
		</Container>
	);
};
