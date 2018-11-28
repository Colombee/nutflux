import React, { Component } from 'react';
import './../../css/index.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Link to='/'></Link>
        <h1>Welcome to Nutflux !</h1>
        <Link to="/movies" className="home-link"><button class='home-button'>MOVIES</button></Link>
      </div>
    );
  }
}

export default Home;