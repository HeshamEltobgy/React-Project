import React, { Component } from 'react';  
import optimized2 from './optimized2.jpg';
import rendered2 from './rendered2.jpg';
import './index.css';

 function* eachItem(arr) {
    for(var i = 0; i < arr.length; i++) {
      yield arr[i];
    }
  }
  var letters = eachItem(['If you have an awesome idea', 'Get in Touch with us', 'We can make it real', 'So,']);

  var abcs = setInterval(function() {
    var letter = letters.next();
    if(letter.done) {
      clearInterval(abcs);
      document.getElementById('letter').innerHTML = "Let's Get Started";
    } else {
      document.getElementById('letter').innerHTML = letter.value;
    }
  },
    1700);


class Image extends Component {

 
  render() {
    return (
      <div>
     <div id='wrapper'>
      <a href="" id="letter" className="text" style={{ textDecoration: 'none'}}></a>
         <img src={optimized2} width="4000" height="1406" className="image" alt="image" />
        
    </div>
    <div id="wrapper2" style={{textAlign: 'center'}}> 
      <p className="text" style={{}}> We can do the Following</p>
      <img src={rendered2} style={{}} width="1529" height="281" className="image2" alt="image"/>
      
    </div>
     </div> 
    );
  }
}

export default Image;