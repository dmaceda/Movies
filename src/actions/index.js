export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  

  // API THEMOVIEDB.ORG a9f89e28a9c52e268490a138c8218858 //
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=1bc6c554&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

  export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
  }

  export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch("https://www.omdbapi.com/?apikey=1bc6c554&i=" + id)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
          });
      };
  }