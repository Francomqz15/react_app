import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = { 
	sunny: "day-sunny",
	fog: "day-fog" 
};

const getWeatherIcon = weatherState => {
	const icon = icons[weatherState];
	const sizeIcon =  "4px";
	console.log(icons['sunny'])
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