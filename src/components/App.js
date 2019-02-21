import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
//Compontens
import Header from './Core/Header/header';
import ProductList from './ProductList';
import { createStore } from 'redux';
import ShoppingCart from './ShoppingCart';
import LocationList from './LocationList';
import ForecastExtended from './ForecastExtended.js';
import './App.css';

const cities = [
'Buenos Aires, ar',
'Washington, us',
'Bogota col',
'Ciudad de México, mx',
'Madrid, es',
'Lima, pe'];

const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const setCity = value => ({type: 'setCity', value })

class App extends Component {

  constructor() {
    super();
    this.state = {city: null};
  }

  handleSelectedLocation =  city =>  {
    this.setState({city});
    console.log("handldeWeatherLocationClick")
    
    store.dispatch(setCity(city))
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

export default App;
