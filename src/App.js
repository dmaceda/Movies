import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import Nav from "./components/NavBar/Nav";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <React.Fragment>
          <Nav/>
          <NavBar />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
          <Route exact path='/'  component={Buscador} />
          <Footer/>
      </React.Fragment>
  );
}

export default App;
