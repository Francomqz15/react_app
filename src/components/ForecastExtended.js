import React , { Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ForecastExtended extends Component {
	render() {
		const {city} = this.props;
		return (<div> <h2 className="forecast-title"> Pronostico Extendido para {city} </h2> </div>);
	}
}


ForecastExtended.PropTypes = {
	city: PropTypes.string.isRequired
}

export default ForecastExtended;