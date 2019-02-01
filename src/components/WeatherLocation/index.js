import React, {  Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../services/transformWeather';
import './styles.css';
import { api_weather } from './../constants/api_url';

const data = {
	temperature : 6 ,
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
		console.log('constructor')

	}
	componentDidMount() {
		console.log('componentDidMount')	
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate')
	}

	componentWillMount() {
		console.log('UNSAFE componentWillMount')	
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('UNSAFE componentWillUpdate')
	}


	handleUpdateClick = () => {
		console.log('actualizado')

		fetch(api_weather).then(resolve =>{
			return resolve.json()
		}).then(data => {
			const newWeather = this.transformWeather(data)
			console.log(newWeather)
			debugger;
			this.setState({
				data: newWeather
			})
		})
	}

	render() { 
		console.log('render')
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