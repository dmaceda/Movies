import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from '../../actions'
import cancel from '../../icons/cancel.png'

export class ConnectedList extends Component {

  render() {
    return (
      <div id= 'favorites'className="container_fav">
        <h2 className='title'>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map (peli =>
            <div key={peli.imdbID} className='favs'>
              <Link to={`/movie/${peli.imdbID}`} className='link'>
                  <li className="list">{peli.Title}</li>
              </Link>
              <button className="bt" type="submit"onClick={()=> this.props.removeMovieFavorite(peli.imdbID)} ><img src={cancel} width='20px' alt="fav" /></button>
            </div>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {
     movies: state.moviesFavourites
   }
}

export default connect (mapStateToProps,{removeMovieFavorite})(ConnectedList);
