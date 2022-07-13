import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from '../../actions/index';
import star from '../../icons/estrella.png'
import loupe from '../../icons/loupe.png'




export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div className="contenedor">

        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <button className="boton-search"  type="submit"><img id='imge'src={loupe} width='15px' alt="search" /></button>
            <input
              placeholder="Busca película o serie..."
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
              className ='input-search'
            />
        </form>
        <ul>
         {this.props.movies ?.map( peli => 
         <div className="lista-peliculas" key={peli.imdbID}>
              <Link to={`/movie/${peli.imdbID}`} className="titulo">
              <img id='post'src={peli.Poster}/>
              </Link>
              <div id='tityear'>
                <div className="pel">
              <button className="icon"  type="submit" onClick={()=> this.props.addMovieFavorite({Title: peli.Title, imdbID: peli.imdbID})}>
                <img  src={star} width='20px' alt="fav" /> </button>
              <Link to={`/movie/${peli.imdbID}`} className="titulo">
                <h4 id='tit'>{peli.Title}</h4>
              </Link>
              <p id='year'>{peli.Year}</p>
                </div> 
              </div> 
         </div>
        
         )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
