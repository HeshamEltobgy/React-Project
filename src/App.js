import React, { Component } from 'react';

import Header from './header';

import Menu from './menu';

import Image from './image';

import Content from './content';

import Footer from './footer';



class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Menu  />
       <Image />
       <div className="content-footer">
       <Content />
       <Footer />
       </div>
      </div>
    );
  }
}

export default App;
