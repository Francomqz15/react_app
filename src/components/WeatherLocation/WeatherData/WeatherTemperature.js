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
	console.log(weatherState)
	console.log(icons)
	const icon =  icons[weatherState];
	const sizeIcon =  "4x";
	this.inc++;
	if (icon) 
		return 		<WeatherIcons className="wicon" name="cloud" size={sizeIcon} />
	else 
		return 		<WeatherIcons className="wicon" name="day-sunny" size="2x" />
}

const randomTem  = ( min , max) => {
	return Math.floor(Math.random() * (max - min)) + min
}

const WeatherTemperature = ({temperature, weatherState}) => {
	let listWeather = ["cloud", "sun", "rain", "snow", "thunder", "day-thunderstore", "day-showers"];
	return (
		<div className="weatherTemperatureCont">
			{
				getWeatherIcon(  listWeather[randomTem( 0,listWeather.length)])
			}
			<span className="temperature">{ `${randomTem( 20, 50)} Cº` }</span>
			<span className="temperatureType"></span>
		</div>
	);
}

export default WeatherTemperature;