import { useSelector } from 'react-redux';
import { degreesSelector } from '../../redux/selectors';
import OpacityIcon from '@mui/icons-material/Opacity';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CurrentWeatherResult } from '../../models/CurrentWeather';
import { MoreInfoCard } from './MoreInfoCard';
import { RowSpaceEvenly } from '../shared/Row';

interface Props {
	currentWeather: CurrentWeatherResult;
}

export const CurrentWeatherMoreInfo: React.FC<Props> = ({ currentWeather }) => {
	const degrees = useSelector(degreesSelector);
	return (
		<RowSpaceEvenly>
			<MoreInfoCard
				title='Wind'
				Icon={AirIcon}
				description1={`${currentWeather.Wind.Speed[degrees.system].Value}`}
				description2={currentWeather.Wind.Speed[degrees.system].Unit}
			/>
			<MoreInfoCard
				title='Dew'
				Icon={OpacityIcon}
				description1={`${currentWeather.DewPoint[degrees.system].Value}`}
				description2={currentWeather.DewPoint[degrees.system].Unit}
			/>
			<MoreInfoCard title='UV' Icon={WbSunnyIcon} description1={`${currentWeather.UVIndexText}`} />
			<MoreInfoCard
				title='Visibility'
				Icon={VisibilityIcon}
				description1={`${currentWeather.Visibility[degrees.system].Value}`}
				description2={`${currentWeather.Visibility[degrees.system].Unit}`}
			/>
		</RowSpaceEvenly>
	);
};
