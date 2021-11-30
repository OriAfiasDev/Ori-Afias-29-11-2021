import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
	className?: string;
	variant?: Variant;
}
export const Logo: React.FC<Props> = ({ className, variant }) => (
	<Link to='/' className={className}>
		<Typography variant={variant || 'h6'} component='span'>
			Weat
			<Typography variant={variant || 'h6'} component='span' color='purple'>
				HEROLO
			</Typography>
		</Typography>
	</Link>
);

type Variant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'body1'
	| 'body2'
	| 'caption'
	| 'button'
	| 'overline'
	| 'inherit'
	| undefined;
