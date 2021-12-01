import { CircularProgress, IconButton, InputAdornment, InputLabel, OutlinedInput, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface Props {
	onClick?: () => void;
	label: string;
	value: string;
	setValue: (val: string) => void;
	loading?: boolean;
	Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

export const Input: React.FC<Props> = ({ onClick, label, value, setValue, loading, Icon }) => (
	<>
		<InputLabel htmlFor={`input-${label}`}>{label}</InputLabel>
		<OutlinedInput
			onClick={onClick}
			autoComplete='none'
			label={label}
			id={`input-${label}`}
			type='text'
			value={value}
			onChange={e => setValue(e.target.value)}
			endAdornment={
				<InputAdornment position='end'>
					<IconButton edge='end'>{loading ? <CircularProgress color='secondary' size={18} /> : <Icon />}</IconButton>
				</InputAdornment>
			}
		/>
	</>
);
