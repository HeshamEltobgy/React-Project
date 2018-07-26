import React, { Component } from 'react';
import './menu.css';






class Menu extends React.Component {
  state = {
    openlink1: false,
    openlink2: false,
    openlink3: false
  
 
   

  }
  handleClick1 = () => {
    this.setState({ openlink1: !this.state.openlink1 });
  }
    handleClick2 = () => {
    this.setState({ openlink2: !this.state.openlink2 });
  }
    handleClick3 = () => {
    this.setState({ openlink3: !this.state.openlink3 });
  }


 

  render () {
    const { openlink1 } = this.state;
    const { openlink2 } = this.state;
    const { openlink3 } = this.state;


 function rotateIcon() {
  var x = document.getElementById("nav-nav");
 
   var y = document.getElementById("icon-down");

  if (x.className === "nav") {

      x.className += " responsive";
      y.className += " rotate"
     

     

  } else {
      x.className = "nav";
      y.className = "material-icons";


     
  }

}

 function changeIcon1() {
  var a = document.getElementById("icon1");
  if (a.className === "material-icons" ) {
      a.className += " rotate"; 
         
  } else {     
      a.className = "material-icons";     
  }
}
 function changeIcon2() {
  var b = document.getElementById("icon2");
  if (b.className === "material-icons" ) {
      b.className += " rotate";
     

  } else {
      b.className = "material-icons";     
  }
}
 function changeIcon3() {
  var c = document.getElementById("icon3");
  if (c.className === "material-icons" ) {
      c.className += " rotate";
          
  } else {    
      c.className = "material-icons";     
  }
}




    return (
     <div id="nav-nav" className="nav">
     <div className="home">
      <a href="#"><i className="fa fa-home"></i></a>
      </div>
      <div className="link1" onClick={this.handleClick1}>
        <span className="link" onClick={changeIcon1} >About
        <i id="icon1" className="material-icons"  style= {{fontSize:"30px" }}>arrow_drop_down</i></span>
        <div className={`menu1 ${openlink1 ? 'openlink1' : ''}`}>
          <ul>
            <li><a href="#">Who are we?</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
      </div>
        <div className="link2" onClick={this.handleClick2}>
       <span className="link" onClick={changeIcon2}>Services
        <i id="icon2" className="material-icons"   style= {{fontSize:"30px" }}>arrow_drop_down</i></span>
        <div className={`menu2 ${openlink2 ? 'openlink2' : ''}`}>
          <ul>
            <li><a href="#">General Services</a></li>
            <li><a href="#">Specific Services</a></li>
            <li><a href="#">Other Solutions</a></li>
          </ul>
        </div>
      </div>
          <div className="link3">
        <span className="link">Projects
        </span>
       
     
      </div>
          <div className="link4">
        <a href="" className="link">Opportunities</a>
        
      
      </div>
          <div className="link5">
       <a href="" className="link">Blog
        </a>

      </div>
       <div className="link6">
        <a href="" className="link" >Explore</a>
      
      </div>
       <div className="link7">
        <a href="" className="link">Contact</a>
        
       
      </div>
     <a href="#" id="icons" className="btn" onClick={rotateIcon} >
<i  id="icon-down" className="material-icons">arrow_drop_down</i>

</a>

    </div>

  


    );
  }
}

export default Menu;