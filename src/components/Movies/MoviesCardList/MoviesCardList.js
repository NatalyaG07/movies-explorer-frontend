import React from 'react';
import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";
import { savedMovies } from "../../../utils/const";

function MoviesCardList({ type, movies }) {

  function transformationDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    let newDuration = '';

    if (hours > 0 && minutes > 0) {
      newDuration = `${hours}ч ${minutes}м`;
    }

    if (hours <= 0 && minutes > 0) {
      newDuration = `${minutes}м`;
    }

    if (hours > 0 && minutes <= 0) {
      newDuration = `${hours}ч`;
    }

    return newDuration;
  }

  return(
      <ul className="movies-card-list">

        {type === "all-movies" && movies.map((movie) =>  {
          return (
            <MoviesCard
            key={movie.id}
            movie={movie}
            nameRU={movie.nameRU} 
            duration={transformationDuration(movie.duration)}
            image={`https://api.nomoreparties.co${movie.image.url}`}
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