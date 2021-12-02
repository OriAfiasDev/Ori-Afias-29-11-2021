import { Collapse } from '@mui/material';
import { useState } from 'react';
import { Container, Content, ExpandMore, Actions } from './Expandable.styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
	beforeCollapse?: React.ReactNode;
	insideCollapse?: React.ReactNode;
	defaultClosed?: boolean;
	background: string;
}

export const Expandable: React.FC<Props> = ({ beforeCollapse, insideCollapse, defaultClosed,background }) => {
	const [open, setOpen] = useState(!defaultClosed);

	const toggleOpen = () => setOpen(cur => !cur);

	return (
		<Container sx={{ background }}>
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
