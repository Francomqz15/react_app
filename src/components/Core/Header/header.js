import React, { Component } from 'react';
import './header.css';
//Compontens
class Header extends Component {
  render() {
    return (
      <header>
		<div class="topnav" id="myTopnav">
		  <a href="#home" class="active">Home</a>
		  <a href="#news">News</a>
		  <a href="#contact">Contact</a>
		  <div class="dropdown">
		    <button class="dropbtn">Officies 
		      <i class="fa fa-caret-down"></i>
		    </button>
		    <div class="dropdown-content">
		      <a href="#">New York</a>
		      <a href="#">London</a>
		      <a href="#">Córdoba </a>
		    </div>
		  </div> 
		  	<a href="#about">About</a>
		  	<a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
		</div>
      </header>
    );
  }
}

export default Header;
