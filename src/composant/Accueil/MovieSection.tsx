import { useEffect, useState } from "react";
import "./MovieSection.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MovieProps from "../../types/MoviesProps";
import { useNavigate } from "react-router-dom";
// import Movie from "./Movie";
// import Movie from "./Movie";

type MoviesContainer = {
  films: MovieProps[];
};

function MovieSection({ films }: MoviesContainer) {
  const [genreHorreur, setGenreHorreur] = useState<MovieProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:2662/movie/genre/horreur")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGenreHorreur(data);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="MovieSection">
      <h1>Films</h1>
      <div className="sectionfilms">
        <div className="lesfilms">
          {films.map((film) => (
            // <Movie
            //   key={film.id}
            //   id={film.id}
            //   title={film.title}
            //   genre={film.genre}
            //   description={film.description}
            //   image={film.image}
            // />

            <div
              className="Movie"
              id={`movie-${film.id}`}
              style={{ backgroundImage: `url(${film.image})` }}
              onClick={() => navigate(`/movie?id=${film.id}`)}
              // onClick={() => navigate(`/movie/=${film.id}`)}
            >
              <div className="infofilm">
                <h4>{film.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="fleche">
          <ArrowForwardIosIcon />
        </div>
      </div>

      <h1>Horreur</h1>
      <div className="sectionhorreur">
        <div className="lesfilms">
          {genreHorreur.map((horreur) => (
            // <Movie
            //   key={film.id}
            //   id={film.id}
            //   title={film.title}
            //   genre={film.genre}
            //   description={film.description}
            //   image={film.image}
            // />

            <div
              className="Movie"
              id={`movie-${horreur.id}`}
              style={{ backgroundImage: `url(${horreur.image})` }}
            >
              <div className="infofilm">
                <h4>{horreur.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="fleche">
          <ArrowForwardIosIcon />
        </div>
      </div>

      <h1>Fantaisie</h1>
    </div>
  );
}

export default MovieSection;
