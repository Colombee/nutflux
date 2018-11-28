import React, { Component } from 'react';
import MovieData from '../../movie.json';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search : ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  render() {
    let filteredMovie = MovieData.movie.filter(
      (Movies) => {
        // return Movies.Title.toLowerCase().indexOf(this.state.search) !== -1;
        return Object.keys(Movies).some(key => Movies[key].toString().search(this.state.search) !== -1);
      }
    );

    return (
      <div>
        <input className="superFilter" placeholder="Search" type='text' value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        <div className="marginautocenter">
            {filteredMovie.map(function(Movies) {
            return (
            <div className = "wrapper-card" >
                <img src= {Movies.Poster} alt = "" className="movie-poster-card" ></img>
                <h3> {Movies.Title} </h3>
                <p> {Movies.Year} </p>
                <p> {Movies.Plot} </p>
            </div>
            );
            })
            }
        </div>
      </div>
    );
  }
}
export default Header;
