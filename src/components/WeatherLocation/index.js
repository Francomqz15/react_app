import React, {  Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../services/transformWeather';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import './styles.css';

class WeatherLocation extends Component  {

	constructor(props) {
		super(props);
		const { city } = props;
		console.log(props)
		this.state = {
			city: city ,
			data: null,
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
		this.handleUpdateClick()
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('UNSAFE componentWillUpdate')
	}

	handleUpdateClick = () => {
		console.log('actualizado')
		const api_weather = getUrlWeatherByCity(this.state.city)
		fetch(api_weather).then(resolve =>{
			return resolve.json()
		}).then(data => {
			const newWeather = transformWeather(data)
			console.log(newWeather)
			this.setState({
				data: newWeather
			})
		})
	}

	render() { 
		const { city, data} = this.state
		return ( 
			<div className="weatherLocationCont">
				<Location city={city} />
				{data ? <WeatherData data={data}></WeatherData> : <CircularProgress/> }
				<button onClick={this.handleUpdateClick}>Actualizar </button>
	 		</div> 
	 		); 
		}
};


export default WeatherLocation;