import React, { Component } from 'react';  
import optimized from './optimized.jpg';
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
     <div id='wrapper'>
      <a href="" id="letter" style={{ textDecoration: 'none'}}></a>
         <img src={optimized} width="1600" height="606" className="image" alt="image" />
        
    </div>
      
    );
  }
}

export default Image;