import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Inscription() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !password) {
      setError("Tous les champs doivent être remplis");
      return;
    }

    try {
      const response = await fetch("http://localhost:2662/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/connexion");
      } else {
        setError(data.message || "Inscription échouée");
      }
    } catch (err) {
      setError("Erreur pendant l'inscription");
    }
  };

  return (
    <div
      className="Inscription"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="joinUs">
        <h1>Nous <span className="red">joindre</span></h1>
        
      </div>
      <div className="boiteConnexion">
        <h1>Inscription</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="formulaire">
          <label>
            <h3>Nom d'utilisateur:</h3>
            <input
              type="text"
              placeholder="Entrez votre nom d'utilisateur"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <h3>Courriel:</h3>
            <input
              type="email"
              placeholder="Entrez votre email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <h3>Mot de passe:</h3>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="fancy-button">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
