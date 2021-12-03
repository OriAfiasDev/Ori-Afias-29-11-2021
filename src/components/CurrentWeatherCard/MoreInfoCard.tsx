import { Grid, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface Props {
	Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
	title: string;
	description1: string;
	description2?: string;
}
export const MoreInfoCard: React.FC<Props> = ({ title, description1, description2, Icon }) => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12} textAlign='center'>
				<Typography variant='body1'>{title}</Typography>
			</Grid>

			<Grid item xs={12} textAlign='center'>
				<Icon />
			</Grid>
			<Grid item xs={12} textAlign='center'>
				<Typography variant='body2'>
					{description1} {description2}
				</Typography>
			</Grid>
		</Grid>
	);
};
