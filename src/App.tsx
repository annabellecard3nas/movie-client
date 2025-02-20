import React, { useEffect, useState } from "react";
import "./style/style.scss";
import { Route, Routes } from "react-router-dom";
import Accueil from "./composant/Accueil/Accueil";
import UnFilm from "./composant/Film/UnFilm";
import MovieProps from "./types/MoviesProps";
import Header from "./composant/general/Header";
import Profile from "./composant/MePage/Profile";
import Lesfilms from "./composant/Film/LesFilms";
import Connexion from "./composant/joinUs/connexion/Connexion";
import Footer from "./composant/general/Footer";
import JoinUs from "./composant/joinUs/JoinUs";



function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/movie" element={<UnFilm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies/all" element={<Lesfilms />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
