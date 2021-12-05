import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const ScreenContainer = styled('div')`
	display: flex;
	min-height: 100vh;
	flex-direction: column;

	@media (min-width: 768px) {
		justify-content: center;
		align-items: center;
	}
`;

export const Page: React.FC = ({ children }) => (
	<ScreenContainer sx={{ bgcolor: 'background.default' }}>
		<Container sx={{ mt: 8 }}>{children}</Container>
	</ScreenContainer>
);
