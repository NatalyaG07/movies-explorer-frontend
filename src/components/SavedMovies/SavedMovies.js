import "./SavedMovies.css";

import {useState} from "react";

import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";


function SavedMovies({ 
  setSavedMovies, 
  savedMovies, 
  handleRemoveSavedMovies }) {

  const [keyWord, setKeyWord] = useState('');

  function handleSearchFilms() {
    const filteredMovie = savedMovies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(keyWord.toLowerCase())
  );
  setSavedMovies(filteredMovie);
  }

  return(
    <main className="saved-movies">
        <SearchForm 
        handleSearchFilms={handleSearchFilms}
        keyWord={keyWord} 
        setKeyWord={setKeyWord}
        />

        <MoviesCardList 
        type="saved-movies" 
        movies={savedMovies} 
        handleRemoveSavedMovies={handleRemoveSavedMovies}
        />
    </main>
  )
}

export default SavedMovies;