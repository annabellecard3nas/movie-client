import { useEffect, useState } from "react";
import MovieSection from "./MovieSection";
import AccueilCarrousel from "./AccueilCarrousel";

import { useSearchParams } from "react-router-dom";
import FetchMovies from "../fetch/FetchMovies";
import MovieProps from "../../types/MoviesProps";

function Accueil() {
  const [films, setFilms] = useState<MovieProps[] | null>(null);

  const [searchParams] = useSearchParams();

  

  let filtre: string | null = "";
  if (searchParams.get("filtre") !== null) {
    filtre = searchParams.get("filtre");
  }

  

  useEffect(() => {
    fetch(`http://localhost:2662/movie/all/${filtre}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilms(data);
      });
  }, [filtre]);

  return (
    <div className="Accueil">
      {films && <AccueilCarrousel films={films} />}

      {films && <MovieSection films={films} />}

    
    </div>
  );
}

export default Accueil;
