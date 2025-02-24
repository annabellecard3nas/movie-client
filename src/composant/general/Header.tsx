import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function Header() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("user_name");
    setUserName(storedName);
  }, []);

  return (
    <div className="Header">
      <div className="droite">
        <p className="logo">movies-list</p>
        <div className="barreRecherche">
          <p>search</p>
          <SearchBar />
        </div>
      </div>
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/seenMovies">
          <li>Watched</li>
        </Link>
        <Link to="/watchlist">
          <li>WatchList</li>
        </Link>
        <Link to="/profile">
          <li>Welcome {userName || "Guest"}</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
