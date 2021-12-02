import { Collapse } from '@mui/material';
import { useState } from 'react';
import { Container, Content, ExpandMore, Actions } from './Expandable.styled';
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
			<Content>
				{beforeCollapse}
				<Collapse in={open} timeout='auto'>
					{insideCollapse}
				</Collapse>
			</Content>

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
