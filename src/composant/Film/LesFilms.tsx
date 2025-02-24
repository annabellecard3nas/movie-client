import {  useNavigate, useSearchParams } from "react-router-dom";
import FetchMovieGenre from "../fetch/FetchMovieGenre";
import FetchMovies from "../fetch/FetchMovies";  
import MovieProps from "../../types/MoviesProps";

function Lesfilms() {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");
  const navigate= useNavigate()

  // Fetch movies en genre si specifier ou tout  sinon
  const films: MovieProps[] = genre ? FetchMovieGenre(genre,{}) : FetchMovies({limit:null,filtre:null});  // FetchMovies fetches all movies

  
  console.log(films);
  

  return (
    <div className="Lesfilms">
      <h1>{genre ? `Films de ${genre}` : "Tous les films"}</h1>
      <div className="filmsContainer">
        {films.map((film) => (
          <div
            key={film.id}
            className="Movie"
            style={{ backgroundImage: `url(${film.image})` }}
            onClick={() => navigate(`/movie?id=${film.id}`)}
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
