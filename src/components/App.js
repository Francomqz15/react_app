import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
//Compontens
import Header from './Core/Header/header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import LocationList from './LocationList';
import ForecastExtended from './ForecastExtended.js';
import PropTypes from 'prop-types';

import './App.css';
import { setCity } from './actions';

const cities = [
'Buenos Aires, ar',
'Washington, us',
'Bogota col',
'Ciudad de México, mx',
'Madrid, es',
'Lima, pe'];


class App extends Component {

  constructor() {
    super();
    this.state = {city: null};
  }

  handleSelectedLocation =  city =>  {
    this.setState({city});
    console.log("handldeWeatherLocationClick")
    
    this.props.setCity(city)
  }

  render() {
    const {city}  = this.state;

    return (
          <div className="container-fluid">
                <Header></Header>
                    <Row>
                        Weather App
                    </Row>
                    <Row>
                         <Col xs={12} md={6}>
                             <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} ></LocationList>
                         </Col>
                         <Col xs={12} md={6}>
                             <div className="details">
                                { 
                                  !city ? null: <ForecastExtended city={city}> </ForecastExtended>
                                }
                             </div>
                         </Col>
                    </Row>  
                   
                    <Row>
                       <Col xs={12} md={6}>
                          <ProductList />
                        </Col>
                        <Col xs={12} md={6}>
                            <ShoppingCart />
                        </Col>
                    </Row>
            </div>
      );
  }
}


App.propTypes = {
  setCity: PropTypes.func.isRequired
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(App)
