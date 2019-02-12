import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';


const LocationList = ({cities, onSelectedLocation}) => {

	const handldeWeatherLocationClick =  city => {
		console.log(`handldeWeatherLocationClick" ${city} `)
		onSelectedLocation(city)
	}

	const strToComponents = cities => (

		cities.map( city => (
			<WeatherLocation  
			 	key={city} 
			 	city={city} 
			 	onWeatherLocationClick={()=> handldeWeatherLocationClick(city) } /> ))
   	)

	return ( 
		<div>
			{strToComponents(cities)}
		</div>
	)
}

LocationList.propTypes = {
	cities: PropTypes.array.isRequired,
	onSelectedLocation: PropTypes.func
}

export default LocationList;

