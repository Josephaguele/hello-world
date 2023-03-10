import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome/>
        <Hello/>
      </div>
    );
  }
}

export default App;
