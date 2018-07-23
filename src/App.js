import React, { Component } from 'react';

import Header from './header';

import Menu from './menu';

import Image from './image';

import Content from './content';



class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Menu  />
       <Image />
       <Content />
      </div>
    );
  }
}

export default App;
