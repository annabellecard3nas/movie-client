import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:2662/auth/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.access_token) {
        localStorage.setItem("access_token", data.access_token); // Enregistrer le token dans le localStorage
        console.log("User authenticated:", data);
        navigate("/"); // Rediriger vers la page profile après la connexion
      } else {
        setError(data.message || "Authentication failed");
      }
    } catch (err) {
      setError("Error during login");
    }
  };

  return (
    <div
      className="Connexion"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="joinUs">
        <h1>Nous <span className="red">joindre</span></h1>
       
      </div>
      <div className="boiteConnexion">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit} className="formulaire">
          <label>
            <h3>Courriel:</h3>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <h3>Mot de passe:</h3>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" onClick={() => navigate(`/profile`)}>
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
