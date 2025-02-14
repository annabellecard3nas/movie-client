import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import UnFilm from "./Film/UnFilm";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/movie" element={<UnFilm/>} />
      </Routes>
    </div>
  );
}

export default App;
