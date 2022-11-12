import React from 'react';
import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";
import { 
  movies,
  savedMovies
 } from "../../../utils/const";

function MoviesCardList({ type }) {

  return(
      <ul className="movies-card-list">

        {type === "all-movies" && movies.map((movie) =>  {
          return (
            <MoviesCard
            key={movie._id} 
            nameRU={movie.nameRU} 
            duration={movie.duration} 
            image={movie.image}
            isSaved={movie.isSaved}
            type={type}
            />
          );
        })}

        {type === "saved-movies" && savedMovies.map((movie) =>  {
          return (
            <MoviesCard
            key={movie._id} 
            nameRU={movie.nameRU} 
            duration={movie.duration} 
            image={movie.image}
            isSaved={movie.isSaved}
            type={type}
            />
          );
        })}

        
        {/* {movies?.map((movie) =>  {
          return (
            <MoviesCard
            key={movie._id} 
            nameRU={movie.nameRU} 
            duration={movie.duration} 
            image={movie.image}
            isSaved={movie.isSaved}
            type={type}
            />
          );
        })} */}
      </ul>
  )
}

export default MoviesCardList;