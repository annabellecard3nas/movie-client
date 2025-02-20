import DataMovie from "../../types/MoviesProps";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type MoviesContainer = {
  films: DataMovie[];
};

function AccueilCarrousel({ films }: MoviesContainer) {
  const [index, setIndex] = useState(0);

  return (
    <div className="AccueilCarrousel">
      {films.slice(0, 1).map((film) => (
        <div className="imagesection" key={film.id}>
          <div className="info">
            <div className="text">
              <h1>{film.title}</h1>
              <h3>synopsis</h3>
              <p>{film.description}</p>
              <br />
              <p>{film.genre}</p>
            </div>
          </div>

          <div className="image">
            <div
              className="cercle"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0) 56%, rgba(0, 0, 0, 0.51) 63%, rgb(0, 0, 0) 70%), url(${film.image})`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccueilCarrousel;
