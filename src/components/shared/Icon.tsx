import { IconButton, SvgIconTypeMap, Badge } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';

interface Props {
	onClick?: () => void;
	Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
	badgeContent?: string;
}

export const NavIcon: React.FC<Props> = ({ onClick, Icon, badgeContent }) => {
	return (
		<Container>
			<Button color='secondary' onClick={onClick}>
				<Badge badgeContent={badgeContent} color='secondary'>
					<Icon />
				</Badge>
			</Button>
		</Container>
	);
};

const Container = styled(Box)({ backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 10 });

const Button = styled(IconButton)({ borderRadius: 10, cursor: 'pointer' });
