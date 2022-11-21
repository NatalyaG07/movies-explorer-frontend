import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, nameRU, duration, image, isSaved, type }) {

  return(
    <article className="movies-card">
      <img className="movies-card__img" src={image} alt={nameRU} />

      <div className="movies-card__info">
        <div className="movies-card__group">
          <h2 className="movies-card__title">{nameRU}</h2>

          {type === "saved-movies" && (
          <button className="movies-card__like movies-card__like_remove"></button>
          )}


          {type === "all-movies" && (
          <button className={`movies-card__like ${isSaved && "movies-card__like_active"}`} type="button" aria-label="Лайк"></button>
          )}
        </div>

        <h3 className="movies-card__duration">{duration}</h3>
      </div>
    </article>
  )
}

export default MoviesCard;