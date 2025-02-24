import { useEffect, useRef, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MovieProps from "../../types/MoviesProps";
import { useNavigate } from "react-router-dom";
import FetchMovieGenre from "../fetch/FetchMovieGenre";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
// import Movie from "./Movie";
// import Movie from "./Movie";

type MoviesContainer = {
  films: MovieProps[];
};

function MovieSection({ films }: MoviesContainer) {
  const genreHorreur = FetchMovieGenre("horreur", {});
  const genreFantaisie = FetchMovieGenre("fantaisie", {});
  const genreAction = FetchMovieGenre("Action", {});
  const genreRomance = FetchMovieGenre("Romance", {});
  const genreDrame = FetchMovieGenre("Drame", {});

  const navigate = useNavigate();

  // Références pour chaque section de films
  const filmsRef = useRef<HTMLDivElement>(null);
  const horreurRef = useRef<HTMLDivElement>(null);
  const fantaisieRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);
  const romanceRef = useRef<HTMLDivElement>(null);
  const drameRef = useRef<HTMLDivElement>(null);

  // Fonction de scroll
  const scroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };



  return (
    <div className="MovieSection">
      <h1>Films</h1>
      <div className="sectionfilms">
        <div className="flecheGauche" onClick={() => scroll(filmsRef, "left")}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="lesfilms" ref={filmsRef}>
          {films.map((film) => (
            <div
              key={film.id}
              className="Movie"
              style={{ backgroundImage: `url(${film.image})` }}
              onClick={() => navigate(`/movie?id=${film.id}`)}
            >
              <div className="infofilm">
                <h4>{film.title}</h4>

                <button >
                  <VisibilityIcon />
                </button>
                {/* <button>
                  <VisibilityOffIcon />
                </button> */}
              </div>
            </div>
          ))}
          {/* Case Voir Plus en dernier */}
          <div
            className="Movie voirPlus"
            onClick={() => navigate(`/movies/all`)}
          >
            <h2>Voir plus</h2>
          </div>
        </div>
        <div className="fleche" onClick={() => scroll(filmsRef, "right")}>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <h1>Horreur</h1>
      <div className="sectionhorreur">
        <div
          className="flecheGauche"
          onClick={() => scroll(horreurRef, "left")}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div className="lesfilms" ref={horreurRef}>
          {genreHorreur.map((film) => (
            <div
              className="Movie"
              key={film.id}
              style={{ backgroundImage: `url(${film.image})` }}
              onClick={() => navigate(`/movie?id=${film.id}`)}
            >
              <div className="infofilm">
                <h4>{film.title}</h4>
              </div>
            </div>
          ))}
          <div
            className="Movie voirPlus"
            onClick={() => navigate(`/movies/all?genre=horreur`)}
          >
            <h2>Voir plus</h2>
          </div>
        </div>
        <div className="fleche" onClick={() => scroll(horreurRef, "right")}>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <h1>Fantaisie</h1>
      <div className="sectionFantaisie">
        <div
          className="flecheGauche"
          onClick={() => scroll(fantaisieRef, "left")}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div className="lesfilms" ref={fantaisieRef}>
          {genreFantaisie.map((film) => (
            <div
              className="Movie"
              key={film.id}
              style={{ backgroundImage: `url(${film.image})` }}
              onClick={() => navigate(`/movie?id=${film.id}`)}
            >
              <div className="infofilm">
                <h4>{film.title}</h4>
              </div>
            </div>
          ))}
          <div
            className="Movie voirPlus"
            onClick={() => navigate(`/movies/all?genre=fantaisie`)}
          >
            <h2>Voir plus</h2>
          </div>
        </div>
        <div className="fleche" onClick={() => scroll(fantaisieRef, "right")}>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <h1>Action</h1>
      <div className="sectionAction">
        <div className="flecheGauche" onClick={() => scroll(actionRef, "left")}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="lesfilms" ref={actionRef}>
          {genreAction.map((film) => (
            <div
              className="Movie"
              key={film.id}
              style={{ backgroundImage: `url(${film.image})` }}
              onClick={() => navigate(`/movie?id=${film.id}`)}
            >
              <div className="infofilm">
                <h4>{film.title}</h4>
              </div>
            </div>
          ))}
          <div
            className="Movie voirPlus"
            onClick={() => navigate(`/movies/all?genre=action`)}
          >
            <h2>Voir plus</h2>
          </div>
        </div>
        <div className="fleche" onClick={() => scroll(actionRef, "right")}>
          <ArrowForwardIosIcon />
        </div>
      </div>

      {/* Section Romance */}
      <h1>Romance</h1>
      <div className="sectionRomance">
        <div
          className="flecheGauche"
          onClick={() => scroll(romanceRef, "left")}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div className="lesfilms" ref={romanceRef}>
          {genreRomance.map((film) => (
            <div
              className="Movie"
              key={film.id}
              style={{ backgroundImage: `url(${film.image})` }}
              onClick={() => navigate(`/movie?id=${film.id}`)}
            >
              <div className="infofilm">
                <h4>{film.title}</h4>
              </div>
            </div>
          ))}
          <div
            className="Movie voirPlus"
            onClick={() => navigate(`/movies/all?genre=romance`)}
          >
            <h2>Voir plus</h2>
          </div>
        </div>
        <div className="fleche" onClick={() => scroll(romanceRef, "right")}>
          <ArrowForwardIosIcon />
        </div>
      </div>

      {/* Section Drame */}
      <h1>Drame</h1>
      <div className="sectionDrame">
        <div className="flecheGauche" onClick={() => scroll(drameRef, "left")}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="lesfilms" ref={drameRef}>
          {genreDrame.map((film) => (
            <div
              className="Movie"
              key={film.id}
              style={{ backgroundImage: `url(${film.image})` }}
              onClick={() => navigate(`/movie?id=${film.id}`)}
            >
              <div className="infofilm">
                <h4>{film.title}</h4>
              </div>
            </div>
          ))}
          <div
            className="Movie voirPlus"
            onClick={() => navigate(`/movies/all?genre=drame`)}
          >
            <h2>Voir plus</h2>
          </div>
        </div>
        <div className="fleche" onClick={() => scroll(drameRef, "right")}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default MovieSection;


