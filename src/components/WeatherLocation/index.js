import React, {  Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const location = "Buenos Aires, ar";
const api_key = "b6907d289e10d714a6e88b30761fae22";
const url_base_weather = "https://samples.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid= ${api_key}`;

const data = {
	temperature : 6 ,
	weatherState: 'SUN' ,
	humidity: 10,
	wind: '10 m/s'
}

const data2 = {
	temperature : 15 ,
	weatherState: 'SUN' ,
	humidity: 10,
	wind: '10 m/s'
}

class WeatherLocation extends Component  {

	constructor() {
		super();
		this.state = {
			city: 'Buenos aires',
			data: data,
		};
	}

	handleUpdateClick = () => {
		console.log('actualizado')

		fetch(api_weather).then(resolve =>{
			return resolve.json()
		}).then(data => {
			const newWeather = this.getData(data)
			console.log(newWeather)
			debugger;
			this.setState({
				data: newWeather
			})
		})


	}

	getWeatherState = weather_data => {
		return 'SUN';
	}

	getData = weather_data => {
		const { humidity, temp } = weather_data.main;
		const { speed } = weather_data.wind;
		const  weatherState = this.getWeatherState(weather_data);
		const data = {
			humidity,
			temperature: temp,
			weatherState,
			wind: `${data2.wind} m/s`
		}
		return data;
	}

	render() { 
		const { city, data} = this.state
		return ( 
			<div className="weatherLocationCont">
				<Location city={city}>	</Location>
				<WeatherData data={data}></WeatherData>
				<button onClick={this.handleUpdateClick}>Actualizar </button>
	 		</div> 
	 		); 
		}
};

export default WeatherLocation;