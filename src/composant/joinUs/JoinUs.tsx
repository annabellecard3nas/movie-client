import { useNavigate } from "react-router-dom";

function JoinUs() {
  const navigate = useNavigate();

  return (
    <div
      className="JoinUs"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <h1>
        Nous <span className="red">joindre</span>
      </h1>
      <div className="contentJoinsUs">
        <div className="text">
          <p>
            Écrivez votre avis sur les films, séries et bien plus encore… Ne
            perdez plus jamais le souvenir de vos films et séries préférés, ni
            même de votre opinion à leur sujet !
          </p>
        </div>
        <div className="singInOutcontent">
          <div className="singInOut">
            <h3
              className="inscription"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/inscription")}
            >
              S'inscrire
            </h3>
            <h3
              className="connexion"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/connexion")}
            >
              Connexion
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
