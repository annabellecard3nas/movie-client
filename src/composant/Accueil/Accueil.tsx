import { useEffect, useState } from "react";
import MovieSection from "./MovieSection";
import AccueilCarrousel from "./AccueilCarrousel";

import { useSearchParams } from "react-router-dom";
import FetchMovies from "../fetch/FetchMovies";
import MovieProps from "../../types/MoviesProps";

function Accueil() {
  // const [films, setFilms] = useState<MovieProps[] | null>(null);
  const [searchParams] = useSearchParams();

  let filtre: string | null = "";
  
  if (searchParams.get("filtre") !== null) {
    filtre = searchParams.get("filtre");
  }

  const lesFilms = FetchMovies({limit:15, filtre  })

  return (
    <div className="Accueil">
      {lesFilms && <AccueilCarrousel films={lesFilms} />}

      {lesFilms && <MovieSection films={lesFilms} />}

    
    </div>
  );
}

export default Accueil;
