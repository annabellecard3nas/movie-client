import "./AccueilCarrousel.scss";
import DataMovie from "../../types/MoviesProps";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type MoviesContainer = {
    films: DataMovie[];
  };

function AccueilCarrousel({films}:MoviesContainer) {
    const [index,setIndex]= useState(0);
    

  return (
    <div className="AccueilCarrousel">
    {films.slice(0, 4).map((film)=>(
      <div className="imagesection">

        <div className="info">
          <div className="text">
            <h1>{film.title}</h1>
            <h3>synopsis</h3>
            <p>
              {film.description}
            </p>
          </div>
        </div>

        <div className="image">
          <div className="cercle" style={{ backgroundImage: `url(${film.image})` }}>
          </div>
        </div>
      </div>
       ))}
    </div>
  );
}

export default AccueilCarrousel;
