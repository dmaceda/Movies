import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){
    this.props.getMovieDetail(this.props.match.params.id)
}
componentWillUnmount(){
    this.props.getMovieDetail('')
}

    render() {
        return (
            <div className="movie-detail">
               <h3 className='title'>{this.props.movie.Title}</h3>
               <p className='sinopsis'>{this.props.movie.Plot}</p>
               <img src={this.props.movie.Poster} className='poster_detail'/>
                <ul className='descripcion'>
               <li>Pais: {this.props.movie.Country}</li>
               <li>Año: {this.props.movie.Year}</li>
               <li>Genero: {this.props.movie.Genre}</li>
               <li>Director: {this.props.movie.Director}</li>
               <li>Reparto: {this.props.movie.Actors}</li>
               </ul>
            </div>
        );
    }
}














const mapStateToProps = (state) => {
    return {
        movie: state.movieDetail
    }
}


export default connect (mapStateToProps,{getMovieDetail})(Movie);