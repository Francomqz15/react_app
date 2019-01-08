import React, { Component } from 'react';
import './header.css';
//Compontens
class Header extends Component {
  render() {
    return (
      <header>
		<div className="topnav" id="myTopnav">
		  <a href="#home" className="active">Home</a>
		  <a href="#news">News</a>
		  <a href="#contact">Contact</a>
		  <div className="dropdown">
		    <button className="dropbtn">Officies 
		      <i className="fa fa-caret-down"></i>
		    </button>
		    <div className="dropdown-content">
		      
		    </div>
		  </div> 
		  	<a href="#about">About</a>
		</div>
      </header>
    );
  }
}

export default Header;
