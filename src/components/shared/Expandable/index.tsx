import { Collapse } from '@mui/material';
import { useState } from 'react';
import { Container, Content, ExpandMore, Actions } from './Expandable.styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getGradientByWeather } from '../../../utils/gradient';

interface Props {
	beforeCollapse?: React.ReactNode;
	insideCollapse?: React.ReactNode;
	defaultClosed?: boolean;
}

export const Expandable: React.FC<Props> = ({ beforeCollapse, insideCollapse, defaultClosed }) => {
	const [open, setOpen] = useState(!defaultClosed);

	const toggleOpen = () => setOpen(cur => !cur);

	return (
		// <Container sx={{ background: 'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)' }}>
		<Container sx={{ background: getGradientByWeather('hot') }}>
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
