import "./MoviesCard.css";

import { useState } from "react";

function MoviesCard({ movie, nameRU, duration, image, type, handleAddSavedMovies, handleRemoveSavedMovies, savedMovies, setSavedMoviesRender }) {

  const [likeActive, setlikeActive] = useState(false);

  function handleLikeActive() {
    if(!likeActive) {
      handleAddSavedMovies(movie);
      setlikeActive(true);
    } else {
      const movieWhisLike = savedMovies.filter((saved) => saved.movieId === movie.id);

      handleRemoveSavedMovies(movieWhisLike[0]);
      setlikeActive(false);
    }
  }

  function removeMovie() {
    handleRemoveSavedMovies(movie);
    setSavedMoviesRender(m => m + 1);
  }

  return(
    <article className="movies-card">
      <img className="movies-card__img" src={image} alt={nameRU} />

      <div className="movies-card__info">
        <div className="movies-card__group">
          <h2 className="movies-card__title">{nameRU}</h2>

          {type === "saved-movies" && (
          <button className="movies-card__like movies-card__like_remove"
          onClick={removeMovie}></button>
          )}


          {type === "all-movies" && (
          <button 
          className={`movies-card__like ${likeActive && "movies-card__like_active"}`}
          type="button" 
          aria-label="Лайк"
          onClick={handleLikeActive}></button>
          )}
        </div>

        <h3 className="movies-card__duration">{duration}</h3>
      </div>
    </article>
  )
}

export default MoviesCard;