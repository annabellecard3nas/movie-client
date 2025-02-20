import { useEffect, useState } from "react";
import MovieProps from "../../types/MoviesProps";

export default function FetchMovieGenre(
  param: string,
  { limit }: { limit?: number }
) {
  const [genre, setGenre] = useState<MovieProps[]>([]);

  useEffect(() => {
    async function fetchGenre() {
      try {
        const url =
          limit !== undefined
            ? `http://localhost:2662/movie/genre/${param}?limit=${limit}`
            : `http://localhost:2662/movie/genre/${param}`;

        const response = await fetch(url);
        const data = await response.json();
        setGenre(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchGenre();
  }, [param, limit]);

  return genre;
}
