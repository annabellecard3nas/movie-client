import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <div className="droite">
        <p className="logo">movies-list</p>
        <div className="barreRecherche">
          <p>search</p>
          <input type="text" placeholder="Search.."></input>
        </div>
      </div>
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/">
          <li>Movie</li>
        </Link>
        <Link to="/watchlist">
          <li>WatchList</li>
        </Link>
        <Link to="/profile">
          <li>Welcome Name</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
