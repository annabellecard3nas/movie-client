import { useEffect, useState } from "react";
import  FetchUser  from "../fetch/FetchUser";
import { FetchBookmarkSaw } from "../fetch/FetchBookmarkSaw";
import  BookmarkSawProps from "../../types/BookmarkSawProps";
import { useNavigate } from "react-router-dom";

function SeenMovie() {
  const [bookmarkSeen, setBookmarkSeen] = useState<BookmarkSawProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate=useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setError("You need to be logged in to see your bookmarks.");
      return;
    }

    FetchUser(token)
      .then((userData) => FetchBookmarkSaw(token, userData.id)) // Fetch bookmarks after getting user ID
      .then(setBookmarkSeen)
      .catch(() => setError("Failed to load bookmarks."));
  }, []);

  return (
    <div className="SeenMovie">
      <h1>Vos films vus</h1>
      <div className="contBookmark">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {bookmarkSeen.length > 0 ? (
          bookmarkSeen.map(({ id, movie }) => (
            <div className="bande" onClick={() => navigate(`/movie?id=${movie.id}`)}>            
                <div key={id} className="filmInfo" >
                <h2>{movie.title}</h2>
                <h4>{movie.genre}</h4>
                </div>
                <div className="image" style={{ backgroundImage: `url(${movie.image})`}}></div>  
            </div>
          ))
        ) : (
          <p>Aucun film enregistré</p>
        )}
      </div>
    </div>
  );
}

export default SeenMovie;
