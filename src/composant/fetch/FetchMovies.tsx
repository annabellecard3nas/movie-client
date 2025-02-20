import { useState, useEffect } from "react";
import MovieProps from "../../types/MoviesProps";

function FetchMovies({ limit }: { limit?: number }) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const url = limit !== undefined
          ? `http://localhost:2662/movie/all?limit=${limit}`
          : `http://localhost:2662/movie/all`;

          

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    }
    fetchMovies();
  }, [limit]);

  return movies;
}

export default FetchMovies;

