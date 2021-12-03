import { CardContent, Collapse, Divider } from '@mui/material';
import { useState } from 'react';
import { Container, ExpandMore, Actions } from './Expandable.styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
	beforeCollapse?: React.ReactNode;
	insideCollapse?: React.ReactNode;
	defaultClosed?: boolean;
}

export const Expandable: React.FC<Props> = ({ beforeCollapse, insideCollapse, defaultClosed }) => {
	const [open, setOpen] = useState(!defaultClosed);

	const toggleOpen = () => setOpen(cur => !cur);

	return (
		<Container sx={{ backgroundColor: 'primary.light', boxShadow: 3 }}>
			<CardContent>
				{beforeCollapse}
				{insideCollapse && (
					<Collapse in={open} timeout='auto'>
						<Divider variant='middle' />
						<CardContent>{insideCollapse}</CardContent>
					</Collapse>
				)}
			</CardContent>

			{insideCollapse && (
				<Actions>
					<ExpandMore open={open} onClick={toggleOpen}>
						<ExpandMoreIcon />
					</ExpandMore>
				</Actions>
			)}
		</Container>
	);
};
