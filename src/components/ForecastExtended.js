import React , { Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './Forecastitem';
import transformForecast  from './services/transformForecast';
import './styles.css';

// const days = ['Lunes', 'Martes','Miercoles','Jueves','Viernes'];

// const data = {
// 	temperature: 10,
// 	humidity: 20,
// 	weatherState: 'normal',
// 	wind: 'normal'
// };

const api_key = "01d63e596e2fad40c8afdeb22ce88131";
const url = "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast"

class ForecastExtended extends Component {

	constructor() {
		super();
		this.state = { forecastData: null }
	}

	componentDidMount() {
		this.updateCity(this.props.city)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.city !== this.props.city) {
			this.setState({ forecastData : null })
			this.updateCity(nextProps.city)
		}
	}

	updateCity = city => {
		const url_forecast = `${url}?q=${city}&appid=${api_key}`;

		fetch(url_forecast).then(
			data => (data.json())
		).then(
			weather_data => {
				const forecastData =  transformForecast(weather_data)
				this.setState({forecastData })
			}
		)
	}

	renderForecastItemDays(forecastData) {
		return forecastData.map( forecast => (
			<ForecastItem key={` ${forecast.weekDay}${forecast.hour}`} 
						  weekDay={forecast.weekDay} 
						  hour={forecast.hour} 
						  data={forecast.data}>
			</ForecastItem>
		))
	}

	renderProgress = () => {
		return <h3>Cargando Pronostico extendido..</h3>;
	}

	render() {
		const {city} = this.props;
		const { forecastData } = this.state;
		return (<div> 
					<h2 className="forecast-title"> Pronostico Extendido para {city} </h2> 
					{forecastData ? 
						this.renderForecastItemDays(forecastData):
						this.renderProgress()
					}
				</div>);
	}
}


ForecastExtended.PropTypes = {
	city: PropTypes.string.isRequired
}

export default ForecastExtended;