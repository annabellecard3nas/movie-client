import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieProps from "../../types/MoviesProps";

function UnFilm() {
  const [searchParams] = useSearchParams();
  const getId = searchParams.get("id");

  const [movieData, setMovieData] = useState<MovieProps | null>(null);

  useEffect(() => {
    if (getId) {
      fetch(`http://localhost:2662/movie/${getId}`)
        .then((response) => response.json())
        .then((data: MovieProps) => setMovieData(data));
    }
  }, [getId]);

  if (!movieData) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="UnFilm">
      <div className="image">
        <div className="descriptionSec">
          <div className="desc">
            <h1>{movieData.title}</h1>
            <p>Date de sortie: {movieData.releaseDate}</p>
            <p>Réalisé par:</p>
            <h3>synopsis</h3>
            <p>{movieData.description}</p>
            <p className="genre">{movieData.genre}</p>
          </div>
        </div>

        <div className="imageCont">
          <div
            className="cercle"
            style={{ backgroundImage: `url(${movieData.image})` }}
          ></div>
        </div>
      </div>


      <div className="review">
        <div className="theReview"><h2>Review</h2></div>
        <div className="MyNote">
          <h3>Note Personnel:</h3>
        </div>
      </div>


      <div className="allComments">
          <div className="myComment"><h3>comment:</h3></div>
          <div className="comments"></div>
      </div>
    </div>
  );
}

export default UnFilm;
