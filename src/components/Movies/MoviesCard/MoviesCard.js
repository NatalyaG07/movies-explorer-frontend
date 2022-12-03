import "./MoviesCard.css";

import { useEffect } from "react";

function MoviesCard({ 
  movie, 
  nameRU, 
  duration, 
  image, 
  type, 
  handleRemoveSavedMovies, 
  savedMovies, 
 handleLikeButton }) {

  useEffect(() => {
      cardLikeButtonClassName();
  }, []);

  function cardLikeButtonClassName() {
    if (type === "all-movies") {
      const isLikedMovie = savedMovies.find((saved) => saved.movieId === movie.id);

      const cardLikeButtonClassName = (
        `movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`
      );
      return cardLikeButtonClassName;
    }
  }

  function handleLikeButtonClick() {
    handleLikeButton(movie);
  }

  function removeMovie() {
    handleRemoveSavedMovies(movie);
  }

  return(
    <article className="movies-card">
      <a 
      className="movies-card__link" 
      href={movie.trailerLink}
      target="blank"
      rel="noreferrer">
        <img className="movies-card__img" src={image} alt={nameRU} />
      </a>

      <div className="movies-card__info">
        <div className="movies-card__group">
          <h2 className="movies-card__title">{nameRU}</h2>

          {type === "saved-movies" && (
          <button className="movies-card__like movies-card__like_remove"
          onClick={removeMovie}></button>
          )}


          {type === "all-movies" && (
          <button 
          className={cardLikeButtonClassName()}
          type="button" 
          aria-label="Лайк"
          onClick={handleLikeButtonClick}></button>
          )}
        </div>

        <h3 className="movies-card__duration">{duration}</h3>
      </div>
    </article>
  )
}

export default MoviesCard;