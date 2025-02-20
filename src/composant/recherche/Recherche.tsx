// import { useEffect, useState } from "react";
// import AccueilCarrousel from "../Accueil/AccueilCarrousel";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import MovieProps from "../../types/MoviesProps";

// type MoviesContainer = {
//     films: MovieProps[];
//   };

// function Recherche() {
//   const [films, setFilms] = useState(null);
//   const [searchParams] = useSearchParams();

//   const navigate = useNavigate();

//   let filtre: string | null = "";
//   if (searchParams.get("filtre") !== null) {
//     filtre = searchParams.get("filtre");
//   }


//   useEffect(() => {
//     fetch(`http://localhost:2662/movie/all/${filtre}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setFilms(data);
//       });
//   }, [filtre]);

//   return (
//     <div className="Recherche">
//       {films && <AccueilCarrousel films={films} />}
//       <h1>Films</h1>
//       <div className="sectionfilms">

//         <div className="lesfilms" ref={filmsRef}>
//           {lesFilm.map((film) => (
//             <div
//               key={film.id}
//               className="Movie"
//               style={{ backgroundImage: `url(${film.image})` }}
//               onClick={() => navigate(`/movie?id=${film.id}`)}
//             >
//               <div className="infofilm">
//                 <h4>{film.title}</h4>
//               </div>
//             </div>
//           ))}
//           {/* Case Voir Plus en dernier */}
//           <div
//             className="Movie voirPlus"
//             onClick={() => navigate(`/movies/all`)}
//           >
//             <h2>Voir plus</h2>
//           </div>
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default Recherche;
