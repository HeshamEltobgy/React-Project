import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './index.css';
import './footer.css';


class Footer extends Component {
    
  render() {

    return (
   	<footer>
   <div id="row_grids2">
  
   <Container>
  <Row>
 <Col sm={4} xs={4} className="footer-row footer-row1">
    
<p>Our Business</p>
<ul>
  <li><a href="#">About Us</a></li>
   <li><a href="#">Mission</a></li>
    <li><a href="#">Projects</a></li>
     <li><a href="#">Team</a></li>
    </ul>
    </Col>
    <Col sm={4} xs={4} className="footer-row footer-row2">
   
<p>Our Services</p>
<ul>
  <li><a href="#">Graphic Design</a></li>
   <li><a href="#">Web Design</a></li>
    <li><a href="#">Web Development</a></li>
     <li><a href="#">App Development</a></li>
    </ul>
    </Col>
     <Col sm={4} xs={4} className="footer-row footer-row3">
    
<p>Get In Touch</p>
<ul>
  <li><a href="#">Contact</a></li>
   <li><a href="#">Support</a></li>
    <li><a href="#">Explore</a></li>
  
    </ul>
    </Col>
    </Row>
</Container>

</div>
<div id="row_grids3">
 <Container>
  <Row>
 <Col sm={4} xs={4} className="footer-row-final">
<p>@ 2018 Digital-Tech</p>
</Col>
 <Col sm={4} xs={4} className="footer-row-final">
<p><a href="">Terms</a> - <a href="">Privacy</a></p>
</Col>
<Col sm={4} xs={4} className="footer-row-final">
<p><a href=""><i className="fa fa-facebook"></i></a> | <a href=""><i className="fa fa-twitter"></i></a> | <a href=""><i className="fa fa-linkedin"></i></a></p>
</Col>
</Row>
</Container>
</div>
 </footer>
    );
  }
}

export default Footer; 