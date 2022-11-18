import React from 'react';
import './Movies.css';

import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies() {
  return(
    <main className="movies">
        <SearchForm />
        <MoviesCardList type="all-movies"/>

        <div className="movies__button-box">
          <button className="movies__button" type="button">Ещё</button>
        </div>
    </main>
  )
}

export default Movies;