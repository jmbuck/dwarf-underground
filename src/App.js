import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Content from './content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;