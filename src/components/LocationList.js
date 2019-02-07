import React from 'react';
import WeattherLocation from './../WeatherLocation';
import PropTypes from 'prop-types';

const strToComponents = cities => (
	cities.map((city) => {
		console.log(city)
		return <WeatherLocation city={city} />
	})
);

const LocationList = ({cities}) => {
	console.log(cities)
	return (
		<div>
			strToComponents(cities)
		</div>
	)
}

LocationList.propTypes = {
	cities: PropTypes.array.isRequired
}

export default LocationList;

