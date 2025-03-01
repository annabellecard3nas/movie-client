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
  const [typingTimeout, setTypingTimeout] = useState<{
    [id: number]: NodeJS.Timeout | null;
  }>({});

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setError("tu as besoin d'etre connecter pour voir tes bookmarks");
      return;
    }

    FetchUser(token)
      .then((userData) => FetchBookmarkSaw(token, userData.id)) // Fetch bookmarks after getting user ID
      .then(setBookmarkSeen)
      .catch(() => setError("Failed to load bookmarks."));
  }, []);
  /**
   *
   * declarer que token est ce qui ce trouve dans localstorage comme accesss token
   * declarer succes comme un variable pour amener fetch delete bookmark
   * si le fetch delete a un token et  un bookmark id alors il va filtrer
   * les bookmark pour trouver le id du film qu'on veut delete et le delete
   */
  const handleDelete = async (bookmarkId: number) => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    const success = await FetchDeleteBookmark(token, bookmarkId);
    if (success) {
      setBookmarkSeen((prevBookmarks) =>
        prevBookmarks.filter((bookmark) => bookmark.id !== bookmarkId)
      );
    } else {
      setError("Failed to delete bookmark.");
    }
  };

  const handleNoteChange = (id: number, newNote: string) => {
    setEditingNote((prev) => ({ ...prev, [id]: newNote }));

    // Clear previous timeout if user keeps typing
    if (typingTimeout[id]) {
      clearTimeout(typingTimeout[id]!);
    }

    // Set a new timeout to save after user stops typing for 1 second
    const timeout = setTimeout(() => {
      saveNote(id, newNote);
    }, 1000);

    setTypingTimeout((prev) => ({ ...prev, [id]: timeout }));
  };

  const saveNote = async (id: number, newNote: string) => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    const bookmark = bookmarkSeen.find((b) => b.id === id);
    if (!bookmark) return;

    const updatedBookmark = { ...bookmark, note: newNote };

    const response = await FetchEdit(updatedBookmark, token, true);
    if (response) {
      setBookmarkSeen((prev) =>
        prev.map((b) => (b.id === id ? { ...b, note: newNote } : b))
      );
    } else {
      setError("Échec de la mise à jour de la note.");
    }
  };

  const rating = async ()=>{

  }
  return (
    <div className="SeenMovie">
      <h1>Vos films vus</h1>
      <div className="contBookmark">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {bookmarkSeen.length > 0 ? (
          bookmarkSeen.map(({ id, movie, note }) => (
            <div className="bande">
              <div
                className="image"
                style={{ backgroundImage: `url(${movie.image})` }}
              ></div>
              <div key={id} className="filmInfo">
                <div className="info">
                  <div className="lefilm">
                    <h2>{movie.title}</h2>
                    <h4>{movie.genre}</h4>
                  </div>
                  <h2>{}/5</h2>
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
