import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import logo from './logo.svg';
import './App.css';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
       <Routes />

      </div>
    );
  }
}

export default App;
