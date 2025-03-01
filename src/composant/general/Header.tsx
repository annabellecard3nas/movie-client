import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function Header() {
 

  return (
    <div className="Header">
      <div className="droite">
        <p className="logo">movies-list</p>
        <div className="barreRecherche">
          <p>Rechercher</p>
          <SearchBar />
        </div>
      </div>
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/seenMovies">
          <li>Signets</li>
        </Link>
        {/* <Link to="/watchlist">
          <li>WatchList</li>
        </Link> */}
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
