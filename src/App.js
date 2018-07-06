import React, { Component } from 'react';

import Header from './header';

import Menu from './menu';

import Image from './image';


class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Menu  />
       <Image />
      </div>
    );
  }
}

export default App;
