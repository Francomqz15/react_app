import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../store';
//Compontens
import Header from './Core/Header/header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import WeatherLocation from './WeatherLocation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

          <WeatherLocation></WeatherLocation>
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
