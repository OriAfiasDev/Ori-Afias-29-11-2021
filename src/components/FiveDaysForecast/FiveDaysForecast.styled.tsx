import { Card } from '@mui/material';
import { styled } from '@mui/system';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export const DayContainer = styled(Card)({ margin: '4px 0' });

export const ArrowUp = styled(ArrowUpwardIcon)({ color: 'rgb(255, 99, 132)' });
export const ArrowDown = styled(ArrowDownwardIcon)({ color: 'rgba(75,192,192,1)' });
export const DayIcon = styled(LightModeIcon)({ color: '#EF810E' });
export const NightIcon = styled(ModeNightIcon)({ color: '#001A26' });
