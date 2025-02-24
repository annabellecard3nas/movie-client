import { useState, useEffect } from "react";
import MovieProps from "../../types/MoviesProps";

function FetchMovies({
  filtre,
  limit,
}: {
  filtre?: string | null;
  limit?: number | null;
}) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        // Base URL to fetch all movies
        let url = `http://localhost:2662/movie/all`;

        
        if (filtre) {
          url += `/${filtre}`;
        }

        
        if (limit !== null) {
          url += `?limit=${limit}`;
        }

        
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data); 
      } catch (err) {
        console.error("Error fetching movies:", err); 
      }
    }

    fetchMovies(); 
  }, [filtre, limit]); 

  return movies; 
}

export default FetchMovies;
