

const FetchUser = async (token: string) => {
  const response = await fetch("http://localhost:2662/user/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json(); // Retourne les données de l'utilisateur
};

export default FetchUser; 
