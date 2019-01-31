import React, { Component } from 'react';
import { Button , Glyphicon } from 'react-bootstrap';

const styles  = {
	products: {
		display: 'flex',
		alignItems: 'stretch',
		flexWrap: 'wrap'
	},
	product: {
		width : '220px',
		marginLeft: 10,
		marginRight: 10
	}
}

class ProductList extends Component {
	constructor() {
		super();
		this.addToCart = this.addToCart.bind(this);

		this.state = {
			products : [
				{ id: 1, name: "Valle de cocora", price: 299, image: "https://s26561.pcdn.co/wp-content/uploads/2016/08/Valle-de-Cocora-colombia.jpg" },
				{ id: 2, name: "Isla de rosario", price: 99, image: "https://t-ec.bstatic.com/images/hotel/max1024x768/976/97688647.jpg" },
				{ id: 3, name: "Baru", price: 149, image: "https://www.viajesfalabella.cl/blog/wp-content/uploads/2018/03/012_Playa_Blanca_from_the_Boat.jpg" }
			],
			produxtSelected: {}
		}

		this.onChange =  this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div style={styles.products}>
		        {this.state.products.map(product =>
		          <div className="thumbnail" style={styles.product} key={product.id}>
		            <img width="250px" src={product.image} alt={product.name} />
		            <div className="caption">
		              <h4>{product.name}</h4>
		              <p>
		                <Button bsStyle="primary" onClick={() => this.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
		              </p>
		            </div>
		          </div>
		        )}
      		</div>
      	)
	}

	addToCart(product) {
		this.setState({produxtSelected: product});
  	}
}

export default ProductList;