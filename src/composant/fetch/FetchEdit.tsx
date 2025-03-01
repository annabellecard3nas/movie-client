import BookmarkSawProps from "../../types/BookmarkSawProps";

const FetchEdit = async (
  bookmark: BookmarkSawProps, 
  token: string, 
  isEditing: boolean 
): Promise<BookmarkSawProps | null> => {
  const url = isEditing
    ? `http://localhost:2662/bookmarkSaw/${bookmark.id}` 
    : "http://localhost:2662/bookmarkSaw";

  try {
    const response = await fetch(url, {
      method: isEditing ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        movieID: bookmark.movie?.id, 
        rating: bookmark.rating ?? 0,
        note: bookmark.note ?? "", 
      }),
    });

    if (!response.ok) {
      throw new Error("Impossible de sauvegarder le review");
    }

    return await response.json(); 
  } catch (error) {
    console.error("Erreur FetchEdit:", error);
    return null;
  }
};

export default FetchEdit;
