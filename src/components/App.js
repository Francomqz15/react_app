import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../store';
//Compontens
import Header from './Core/Header/header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import LocationList from './LocationList';


const cities = [
'Buenos Aires, ar',
'Washington, us',
'Bogota col',
'Ciudad de México, mx',
'Madrid, es',
'Lima, pe'];

class App extends Component {


  handleSelectedLocation =  city =>  {
    console.log("handldeWeatherLocationClick")
  }

  render() {
    return (
      <Provider store={store}>
          <div>
                <Header></Header>
                        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} ></LocationList>
                  <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                  </p>
                  <Grid>
                    <Row>
                       <Col sm={8}>
                          <ProductList />
                        </Col>
                        <Col sm={4}>
                            <ShoppingCart />
                        </Col>
                      </Row>
                  </Grid>
            </div>
      </Provider>
      );
  }
}

export default App;
