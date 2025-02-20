import { Link } from "react-router-dom";

import { useState } from "react";
import SearchBar from "./SearchBar";

function Header() {
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
        <Link to="/">
          <li>seen movies</li>
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
