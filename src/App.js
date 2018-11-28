import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Home from './view/components/homepage';
import Movies from './view/components/showCard';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
