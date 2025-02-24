import BookmarkSawProps from "../../types/BookmarkSawProps";

export const FetchBookmarkSaw = async (token: string, userId: number): Promise<BookmarkSawProps[]> => {
  const response = await fetch(`http://localhost:2662/bookmarkSaw?userId=${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch bookmarks");
  }

  return response.json();
};
