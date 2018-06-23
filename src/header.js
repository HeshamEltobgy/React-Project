import React, { Component } from 'react';
import logo1 from './logo1.png';
import './header.css';
import './index.css';


class Header extends Component {
  render() {
    return (
     
        <header>
        <div className="Top-header">
           
          <img src={logo1} width="" height="120px"  className="Logo" alt="logo" />
            
        </div>
        <div className="Middle-header">
             <a className="our-business" >Our Services</a>
              <a className="contact-us">Support</a>
        </div>
        <div  className="Low-header">
        <h3>Powerfull Technology Solutions</h3>
        </div> 
        </header>
    );
  }
}

export default Header;