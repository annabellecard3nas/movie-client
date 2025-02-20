import { useSearchParams } from "react-router-dom";
import FetchMovieGenre from "../fetch/FetchMovieGenre";
import FetchMovies from "../fetch/FetchMovies";  // New FetchMovies function that fetches all movies
import MovieProps from "../../types/MoviesProps";

function Lesfilms() {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  // Fetch movies based on genre, or all movies if no genre is specified
  const films: MovieProps[] = genre ? FetchMovieGenre(genre,{}) : FetchMovies({});  // FetchMovies fetches all movies

  return (
    <div className="Lesfilms">
      <h1>{genre ? `Films de ${genre}` : "Tous les films"}</h1>
      <div className="filmsContainer">
        {films.map((film) => (
          <div
            key={film.id}
            className="Movie"
            style={{ backgroundImage: `url(${film.image})` }}
          >
            <div className="infofilm">
              <h4>{film.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lesfilms;
