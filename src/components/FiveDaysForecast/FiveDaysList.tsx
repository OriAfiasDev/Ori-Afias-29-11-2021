import { DailyForecast, Forecast } from '../../models/DailyForecast';
import { Expandable } from '../shared/Expandable';
import { Card, CardContent, CardHeader, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { DEGREE_SIGN } from '../../utils/gradient';
import { getDayString } from '../../utils/dayString';
import { Row } from '../shared/Row';
import { ArrowDown, ArrowUp, DayContainer, DayIcon, NightIcon } from './FiveDaysForecast.styled';
import React from 'react';

interface Props {
	dailyForecast: DailyForecast;
}

export const FiveDaysList: React.FC<Props> = ({ dailyForecast }) => {
	return (
		<Grid container spacing={1}>
			{dailyForecast.DailyForecasts.map(day => (
				<Grid item xs={6} md={2.4}>
					<DayCard day={day} key={day.Date} />
				</Grid>
			))}
		</Grid>
	);
};

interface DayProps {
	day: Forecast;
}
export const DayCard: React.FC<DayProps> = ({ day }) => {
	const date: Date = new Date(day.Date);
	const MinMaxTemp = () => (
		<TwoTemps first={{ value: day.Temperature.Maximum.Value, icon: <ArrowUp /> }} second={{ value: day.Temperature.Minimum.Value, icon: <ArrowDown /> }} />
	);
	const DayNightTemp = () => (
		<TwoTemps first={{ text: day.Day.IconPhrase, icon: <DayIcon /> }} second={{ text: day.Night.IconPhrase, icon: <NightIcon /> }} />
	);
	return (
		<DayContainer>
			<CardHeader subheaderTypographyProps={{ align: 'center' }} subheader={`${getDayString(date.getDay())} | ${date.toLocaleDateString('he-IL')}`} />
			<CardContent sx={{ paddingTop: 0 }}>
				<Grid container spacing={4}>
					<Grid item sm={6}>
						{MinMaxTemp()}
					</Grid>
					<Grid item sm={6}>
						{DayNightTemp()}
					</Grid>
				</Grid>
			</CardContent>
		</DayContainer>
	);
};

type Info = { value?: number; text?: string; icon: React.ReactNode };

interface TempProps {
	first: Info;
	second: Info;
}
const TwoTemps: React.FC<TempProps> = ({ first, second }) => (
	<div>
		<Row>
			<InfoWithIcon info={first} />
		</Row>
		<Row>
			<InfoWithIcon info={second} />
		</Row>
	</div>
);

interface InfoProps {
	info: Info;
}
const InfoWithIcon: React.FC<InfoProps> = ({ info }) => {
	const text = info.text && info.text.length > 12 ? `${info.text.slice(0, 10)}...` : info.text;
	const value = info.value ? info.value.toFixed(1) + DEGREE_SIGN : '';

	return (
		<Tooltip title={info.text || value || ''}>
			<IconButton sx={{ borderRadius: 1, cursor: 'auto' }}>
				{info.icon}
				{!!info.value && <Typography variant='body1'>{value}</Typography>}
				{!!info.text && <Typography variant='body1'>{text}</Typography>}
			</IconButton>
		</Tooltip>
	);
};
