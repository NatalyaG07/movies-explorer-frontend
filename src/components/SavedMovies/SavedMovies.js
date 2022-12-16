import "./SavedMovies.css";

import {useState, useEffect} from "react";

import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";


function SavedMovies({ 
  savedMovies, 
  handleRemoveSavedMovies }) {

  const [keyWord, setKeyWord] = useState('');
  const [filteredMovie, setFilteredMovie] = useState([]);
  // const [searchMessage, setSearchMessage] = useState('');
  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  function onSelectShortMovie() {
    setIsSelectedIsShortMovie(isSelectedShortMovie => !isSelectedShortMovie);
  }

  function handleSearchFilms() {
    const filteredMovie = savedMovies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(keyWord.toLowerCase())
  );
  setFilteredMovie(filteredMovie);
  }

  useEffect(() => {
    setFilteredMovie(savedMovies);
  }, [savedMovies]);

  function filterCheckboxMovies(savedMovies) {
    const filteredMovie = savedMovies.filter((movie) =>
    movie.duration <= 40);

    // if(filteredMovie.length === 0 && isSelectedShortMovie) {
    //   setSearchMessage("Ничего не найдено");
    // }
    setFilteredMovie(filteredMovie);
  }

  useEffect(() => {
    
    if(isSelectedShortMovie) {
      filterCheckboxMovies(savedMovies);
    } else {
      setFilteredMovie(savedMovies);
    }
  }, [isSelectedShortMovie]);

  return(
    <main className="saved-movies">
        <SearchForm 
        handleSearchFilms={handleSearchFilms}
        keyWord={keyWord} 
        setKeyWord={setKeyWord}
        onSelectShortMovie={onSelectShortMovie}
        isSelectedShortMovie={isSelectedShortMovie}
        />

        <MoviesCardList 
        type="saved-movies" 
        movies={filteredMovie} 
        handleRemoveSavedMovies={handleRemoveSavedMovies}
        />
    </main>
  )
}

export default SavedMovies;