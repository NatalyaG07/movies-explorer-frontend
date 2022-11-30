import React from 'react';
import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ type, movies, handleAddSavedMovies, handleRemoveSavedMovies, savedMovies, setSavedMoviesRender }) {

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
            type={type}
            handleAddSavedMovies={handleAddSavedMovies}
            handleRemoveSavedMovies={handleRemoveSavedMovies}
            savedMovies={savedMovies}
            />
          );
        })}

        {type === "saved-movies" && movies.map((movie) =>  {
          return (
            <MoviesCard
            key={movie._id}
            movieId={movie._id}
            movie={movie}
            nameRU={movie.nameRU} 
            duration={transformationDuration(movie.duration)}
            image={movie.image}
            type={type}
            handleAddSavedMovies={handleAddSavedMovies}
            handleRemoveSavedMovies={handleRemoveSavedMovies}
            setSavedMoviesRender={setSavedMoviesRender}
            />
          );
        })}
      </ul>
  )
}

export default MoviesCardList;