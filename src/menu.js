import React, { Component } from 'react';
import './menu.css';






class Menu extends React.Component {
  state = {
    openlink1: false,
    openlink2: false,
    openlink3: false,
    openlink4: false,
    openlink5: false,
    openlink6: false,
    openlink7: false

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
    handleClick4 = () => {
    this.setState({ openlink4: !this.state.openlink4 });
  }
     handleClick5 = () => {
    this.setState({ openlink5: !this.state.openlink5 });
  }
     handleClick6 = () => {
    this.setState({ openlink6: !this.state.openlink6 });
  }
     handleClick7 = () => {
    this.setState({ openlink7: !this.state.openlink7 });
  }

 

  render () {
    const { openlink1 } = this.state;
    const { openlink2 } = this.state;
    const { openlink3 } = this.state;
    const { openlink4 } = this.state;
    const { openlink5 } = this.state;
    const { openlink6 } = this.state;
    const { openlink7 } = this.state;

 function vip() {
  var x = document.getElementById("nav-nav");
 
   var y = document.getElementById("icon-down");

  if (x.className === "nav") {

      x.className += " responsive";
      y.className += " rotate"
     y.className += " toggled"

     

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
 function changeIcon4() {
  var d = document.getElementById("icon4");
  if (d.className === "material-icons" ) {
      d.className += " rotate"; 
         
  } else {
        d.className = "material-icons";     
  }
}
 function changeIcon5() {
  var e = document.getElementById("icon5");
  if (e.className === "material-icons" ) {
      e.className += " rotate"; 
       
  } else {    
      e.className = "material-icons";     
  }

}
 function changeIcon6() {
  var f = document.getElementById("icon6");
  if (f.className === "material-icons" ) {
      f.className += " rotate"; 
       
  } else {    
      f.className = "material-icons";     
  }

}
 function changeIcon7() {
  var g = document.getElementById("icon7");
  if (g.className === "material-icons" ) {
      g.className += " rotate"; 
       
  } else {    
      g.className = "material-icons";     
  }

}



    return (
     <div id="nav-nav" className="nav">
     <div className="home">
      <a href="#"><i className="fa fa-home"></i></a>
      </div>
      <div className="link1">
        <span className="link" onClick={this.handleClick1}>Click Me
        <i id="icon1" className="material-icons" onClick={changeIcon1}  style= {{fontSize:"30px" }}>arrow_drop_down</i></span>
        <div className={`menu1 ${openlink1 ? 'openlink1' : ''}`}>
          <ul>
            <li><a href="#">Test 1</a></li>
            <li><a href="#">Test 2</a></li>
            <li><a href="#">Test 3</a></li>
          </ul>
        </div>
      </div>
        <div className="link2">
       <span className="link" onClick={this.handleClick2}>Click Me
        <i id="icon2" className="material-icons" onClick={changeIcon2}  style= {{fontSize:"30px" }}>arrow_drop_down</i></span>
        <div className={`menu2 ${openlink2 ? 'openlink2' : ''}`}>
          <ul>
            <li><a href="#">Test 1</a></li>
            <li><a href="#">Test 2</a></li>
            <li><a href="#">Test 3</a></li>
          </ul>
        </div>
      </div>
          <div className="link3">
        <span className="link" onClick={this.handleClick3}>Click Me
         <i id="icon3" className="material-icons" onClick={changeIcon3}  style= {{fontSize:"30px" }}>arrow_drop_down</i></span>
        <div className={`menu3 ${openlink3 ? 'openlink3' : ''}`}>
          <ul>
            <li><a href="#">Test 1</a></li>
            <li><a href="#">Test 2</a></li>
            <li><a href="#">Test 3</a></li>
          </ul>
        </div>
      </div>
          <div className="link4">
        <span className="link" onClick={this.handleClick4}>Click Me
         <i id="icon4" className="material-icons" onClick={changeIcon4}  style= {{fontSize:"30px" }}>arrow_drop_down</i></span>
        <div className={`menu4 ${openlink4 ? 'openlink4' : ''}`}>
          <ul>
            <li><a href="#">Test 1</a></li>
            <li><a href="#">Test 2</a></li>
            <li><a href="#">Test 3</a></li>
          </ul>
        </div>
      </div>
          <div className="link5">
        <span className="link" onClick={this.handleClick5}>Click Me
         <i id="icon5" className="material-icons" onClick={changeIcon5}  style= {{fontSize:"30px" }}>arrow_drop_down</i></span>
        <div className={`menu5 ${openlink5 ? 'openlink5' : ''}`}>
          <ul>
            <li><a href="#">Test 1</a></li>
            <li><a href="#">Test 2</a></li>
            <li><a href="#">Test 3</a></li>
          </ul>
        </div>
      </div>
       <div className="link6">
        <span className="link" onClick={this.handleClick6}>Click Me
         <i id="icon6" className="material-icons" onClick={changeIcon6}  style= {{fontSize:"30px" }}>arrow_drop_down</i></span>
        <div className={`menu6 ${openlink6 ? 'openlink6' : ''}`}>
          <ul>
            <li><a href="#">Test 1</a></li>
            <li><a href="#">Test 2</a></li>
            <li><a href="#">Test 3</a></li>
          </ul>
        </div>
      </div>
       <div className="link7">
        <span className="link" onClick={this.handleClick7}>Click Me
         <i id="icon7" className="material-icons" onClick={changeIcon7}  style= {{fontSize:"30px" }}>arrow_drop_down</i></span>
        <div className={`menu7 ${openlink7 ? 'openlink7' : ''}`}>
          <ul>
            <li><a href="#">Test 1</a></li>
            <li><a href="#">Test 2</a></li>
            <li><a href="#">Test 3</a></li>
          </ul>
        </div>
      </div>
     <a href="#" id="icons" className="btn" onClick={vip} >
<i  id="icon-down" className="material-icons"   style= {{fontSize:"37px" }}>arrow_drop_down</i>

</a>
    </div>
    );
  }
}

export default Menu;