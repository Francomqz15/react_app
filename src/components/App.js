import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../store';
//Compontens
import Header from './Core/Header/header';
import ProductList from './ProductList';
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

class App extends Component {

  constructor() {
    super();
    this.state = {city: null};
  }

  handleSelectedLocation =  city =>  {
    this.setState({city})
    console.log("handldeWeatherLocationClick")
  }

  render() {
    const {city}  = this.state;

    return (
 
      <Provider store={store}>
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
      </Provider>
      );
  }
}

export default App;
