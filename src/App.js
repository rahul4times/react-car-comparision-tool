import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter, Route} from 'react-router-dom';
import Home from './home';
import Temp from './temp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
