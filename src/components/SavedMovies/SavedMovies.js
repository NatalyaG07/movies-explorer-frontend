import React from 'react';
import './SavedMovies.css';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

function SavedMovies() {

  return(
    <main className="saved-movies">
        <SearchForm />
        <MoviesCardList type="saved-movies" />
    </main>
  )
}

export default SavedMovies;