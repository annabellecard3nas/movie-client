export async function FetchDeleteBookmark(token: string, bookmarkId: number): Promise<boolean> {
    try {
      const response = await fetch(`http://localhost:2662/bookmarkSaw/${bookmarkId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete bookmark");
      }
      
      return true; // Successfully deleted
    } catch (error) {
      console.error("Error deleting bookmark:", error);
      return false; // Deletion failed
    }
  }
  