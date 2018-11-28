import React, { Component } from 'react';
import './../../css/index.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import movieData from './../../movie.json';
import Header from './Header';

class Movies extends Component {
  render() {
    return (
        <div className="Movies">
            <Link to='/movies'></Link>
            <Link to="/" className="home-link"><button class='home-button'>RETURN</button></Link>
            <Header/>
            {/* <div>
                <div className="marginautocenter">
                    {movieData.movie.map(movie => 
                        <div className="flextest">
                            <div >
                                <div className="wrapper-card">
                                    <img src={movie.Poster} alt="" class="movie-poster-card"/>
                                    <h3>{movie.Title}</h3>
                                    <h4>{movie.Director}</h4>
                                    <p>{movie.Plot}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div> */}
        </div> 
    );
  }
}

export default Movies;

