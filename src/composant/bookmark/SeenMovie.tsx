import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//fetch
import FetchUser from "../fetch/FetchUser";
import { FetchBookmarkSaw } from "../fetch/FetchBookmarkSaw";
import FetchEdit from "../fetch/FetchEdit";
import { FetchDeleteBookmark } from "../fetch/FetchDeleteBookmark";
//types
import BookmarkSawProps from "../../types/BookmarkSawProps";
//icons
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SeenMovie() {
  const [bookmarkSeen, setBookmarkSeen] = useState<BookmarkSawProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editingNote, setEditingNote] = useState<{ [id: number]: string }>({});
  const [editingRating, setEditingRating] = useState<{ [id: number]: number }>({});
  const [typingTimeout, setTypingTimeout] = useState<{ [id: number]: NodeJS.Timeout | null }>({});

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setError("tu as besoin d'être connecté pour voir tes bookmarks");
      return;
    }

    FetchUser(token)
      .then((userData) => FetchBookmarkSaw(token, userData.id))
      .then(setBookmarkSeen)
      .catch(() => setError("Échec du chargement des favoris."));
  }, []);

  const handleDelete = async (bookmarkId: number) => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    const success = await FetchDeleteBookmark(token, bookmarkId);
    if (success) {
      setBookmarkSeen((prevBookmarks) =>
        prevBookmarks.filter((bookmark) => bookmark.id !== bookmarkId)
      );
    } else {
      setError("Échec de la suppression du favori.");
    }
  };

  const handleNoteChange = (id: number, newNote: string) => {
    setEditingNote((prev) => ({ ...prev, [id]: newNote }));

    if (typingTimeout[id]) {
      clearTimeout(typingTimeout[id]!);
    }

    const timeout = setTimeout(() => {
      saveEdit(id, newNote, editingRating[id] ?? null);
    }, 1000);

    setTypingTimeout((prev) => ({ ...prev, [id]: timeout }));
  };

  const handleRatingChange = (id: number, newRating: number) => {
    setEditingRating((prev) => ({ ...prev, [id]: newRating }));

    if (typingTimeout[id]) {
      clearTimeout(typingTimeout[id]!);
    }

    const timeout = setTimeout(() => {
      saveEdit(id, editingNote[id] ?? "", newRating);
    }, 1000);

    setTypingTimeout((prev) => ({ ...prev, [id]: timeout }));
  };

  const saveEdit = async (id: number, newNote: string, newRating: number | null) => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    const bookmark = bookmarkSeen.find((b) => b.id === id);
    if (!bookmark) return;

    const updatedBookmark = { ...bookmark, note: newNote, rating: newRating };

    const response = await FetchEdit(updatedBookmark, token, true);
    if (response) {
      setBookmarkSeen((prev) =>
        prev.map((b) =>
          b.id === id ? { ...b, note: newNote, rating: newRating ?? b.rating } : b
        )
      );
    } else {
      setError("Échec de la mise à jour.");
    }
  };

  return (
    <div className="SeenMovie">
      <h1>Vos films vus</h1>
      <div className="contBookmark">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {bookmarkSeen.length > 0 ? (
          bookmarkSeen.map(({ id, movie, note, rating }) => (
            <div key={id} className="bande">
              <div
                className="image"
                style={{ backgroundImage: `url(${movie.image})` }}
              ></div>
              <div className="filmInfo">
                <div className="info">
                  <div className="lefilm">
                    <h2>{movie.title}</h2>
                    <h4>{movie.genre}</h4>
                  </div>
                  <div className="rating">
                    <select
                      value={editingRating[id] ?? rating ?? 0}
                      onChange={(e) => handleRatingChange(id, Number(e.target.value))}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <span>/5</span>
                  </div>
                </div>
                <textarea
                  className="noteInput"
                  value={editingNote[id] ?? note ?? ""}
                  onChange={(e) => handleNoteChange(id, e.target.value)}
                  placeholder="Ajouter une note..."
                />
                <div
                  className="deleteBookmark"
                  onClick={() => handleDelete(id)}
                  style={{ cursor: "pointer" }}
                >
                  <RemoveIcon />
                </div>
                <div
                  className="seemore"
                  onClick={() => navigate(`/movie?id=${movie.id}`)}
                >
                  <ArrowForwardIosIcon />
                </div>
              </div>
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
