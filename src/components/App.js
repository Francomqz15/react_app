import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../store';
//Compontens
import Header from './Core/Header/header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import LocationList from './WeatherLocation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

          <LocationList city="London"></LocationList>
          <LocationList city="Buenos Aires,ar"></LocationList>
          <LocationList city="Mexico,mx"></LocationList>
             <div className="App">
                  <Header></Header>
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
