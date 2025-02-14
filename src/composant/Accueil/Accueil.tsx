import { useEffect, useState } from "react";
import "./Accueil.scss";
import MovieSection from "./MovieSection";
import Header from "../general/Header";
import AccueilCarrousel from "./AccueilCarrousel";
import Footer from "../general/Footer";

function Accueil() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetch("http://localhost:2662/movie/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFilms(data);
      });
  }, []);

  return (
    <div className="Accueil">
      <Header/>
      {films &&<AccueilCarrousel films={films}/>}

      {films && <MovieSection films={films} />}

      <Footer/>
    </div>
  );
}

export default Accueil;
