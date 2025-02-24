import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FetchUser from "../fetch/FetchUser"; 

function Profile() {
  const [userInfo, setUserInfo] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true); // Pour afficher un message de chargement
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      setLoading(false); // Si aucun token, arrête le chargement
      return;
    }

    const fetchUserData = async () => {
      try {
        const data = await FetchUser(token); // Utilisation de FetchUser pour récupérer les données
        setUserInfo(data); // Mise à jour des données utilisateur
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Arrêt du chargement
      }
    };

    fetchUserData();
  }, []); // Effectue la requête lorsque le composant est monté

  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Supprimer le token du localStorage
    navigate("/JoinUs"); // Rediriger vers la page de connexion
  };

  const handleLoginRedirect = () => {
    navigate("/JoinUs"); // Rediriger vers la page de connexion si non connecté
  };

  return (
    <div className="Profile">
      <div className="MonProfile">
        <h1>Mon profile</h1>
        {loading ? (
          <p>Loading...</p> // Affiche un message de chargement
        ) : userInfo ? (
          <>
            <h3>Mon username: {userInfo.name}</h3>
            <h3>Mon email: {userInfo.email}</h3>
          </>
        ) : (
          <p>Échecs de chargement du profile. Veuillez vous reconnecter</p> 
        )}

        {/* affichage de boutton dependament de la connexion  */}
        {localStorage.getItem("access_token") ? (
          <button onClick={handleLogout}>Déconnexion</button>
        ) : (
          <button onClick={handleLoginRedirect}>Connexion</button>
        )}
      </div>
    </div>
  );
}

export default Profile;
