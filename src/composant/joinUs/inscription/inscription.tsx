import { useEffect, useState } from "react";

export default function Inscription() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [username,setUsername]= useState("")

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("http://localhost:2662/auth/signin"); // Adjust this endpoint if needed
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    }
    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:2662/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("User authenticated:", data);
        // Handle user login or redirection after successful login
      } else {
        console.error("Authentication failed:", data);
      }
    } catch (err) {
      console.error("Error during login:", err);
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
        <h1>Join</h1>
        <h1 className="us">us</h1>
      </div>
      <div className="boiteConnexion">
        <h1>Inscription</h1>
        <div className="formulaire">
        <label htmlFor="email" className="form">
            <h3>Username:</h3>
            <input
              id="username"
              type="username"
              placeholder="Enter your username"
              required
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="email" className="form">
            <h3>Email:</h3>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="form">
            <h3>Password:</h3>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">connexion</button>
      </div>
    </div>
  );
}


