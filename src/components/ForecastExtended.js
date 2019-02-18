import React , { Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './Forecastitem';
import './styles.css';


const days = ['Lunes', 'Martes','Miercoles','Jueves','Viernes'];

const data = {
	temperature: 10,
	humidity: 20,
	weatherState: 'normal',
	wind: 'normal'
};

class ForecastExtended extends Component {

	renderForecastItemDays() {
		return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
	}

	render() {
		const {city} = this.props;
		return (<div> 
					<h2 className="forecast-title"> Pronostico Extendido para {city} </h2> 
					{this.renderForecastItemDays()}
				</div>);
	}
}


ForecastExtended.PropTypes = {
	city: PropTypes.string.isRequired
}

export default ForecastExtended;