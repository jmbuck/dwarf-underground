import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Article from './article';
import Ad from './ad';
import MoreArticles from './morearticles';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
            <Article />
            <Ad />
            <MoreArticles />  
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
