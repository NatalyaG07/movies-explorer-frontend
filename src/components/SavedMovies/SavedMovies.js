import "./SavedMovies.css";

import {useEffect, useState} from "react";

import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

import * as MainApi from "../../utils/MainApi";

function SavedMovies({ 
  token, 
  setSavedMovies, 
  savedMovies, 
  handleAddSavedMovies, 
  handleRemoveSavedMovies }) {

  const [savedMoviesRender, setSavedMoviesRender] = useState(0);
  const [keyWord, setKeyWord] = useState('');
      

  useEffect(() => {
    if (token) {
      MainApi
      .getSavedMovies(token)
      .then((movies) => {
          setSavedMovies(movies.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [savedMoviesRender]);

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
        handleAddSavedMovies={handleAddSavedMovies}
        handleRemoveSavedMovies={handleRemoveSavedMovies}
        setSavedMoviesRender={setSavedMoviesRender}
        />
    </main>
  )
}

export default SavedMovies;