import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, SUN,RAIN ,SNOW ,THUNDER , DRIZZLE  } from '../../constants/weathers';
import './styles.css';
const icons = { 
	[CLOUD] : "cloud",
	[SUN] : "sun",
	[RAIN] : "rain", 
	[SNOW ] : "snow" ,
	[THUNDER] : "thunder" , 
	[THUNDER] : "day-thunderstore", 
	[DRIZZLE] : "day-showers", 
};

const getWeatherIcon = weatherState => {
	const icon = icons[weatherState];
	const sizeIcon =  "4x";
	
	if (icon) 
		return 		<WeatherIcons name="cloud" size={sizeIcon} />
	else 
		return 		<WeatherIcons name="day-sunny" size="2x" />
}

const WeatherTemperature = ({temperature, weatherState}) => (
	<div className="weatherTemperatureCont">
		{
			getWeatherIcon(weatherState)
		}
		<span className="temperature">{ `${temperature} Cº` }</span>
		<span className="temperatureType"></span>
	</div>
);

export default WeatherTemperature;