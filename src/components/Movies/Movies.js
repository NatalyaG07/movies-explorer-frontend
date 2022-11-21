import './Movies.css';
import {useState} from "react";

import { moviesApi } from "../../utils/MoviesApi";

import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies() {

  const [movies, setMovies] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  function filterMovies(movies) {
    const filteredMovie = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(keyWord.toLowerCase())
    );

    if(filteredMovie.length === 0) {
      setSearchMessage('Ничего не найдено');
    }
    setMovies(filteredMovie);
  }

  function handleSearchFilms() {
    moviesApi
    .getMovies()
    .then((movies) => {
      filterMovies(movies);
    })
    .catch((err) => {
      setSearchMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    });
  }


  return(
    <main className="movies">
        <SearchForm
         handleSearchFilms={handleSearchFilms} 
         keyWord={keyWord} 
         setKeyWord={setKeyWord}
        />

        {movies.length > 0 ? (
          <>
            <MoviesCardList type="all-movies" movies={movies} />

            <div className="movies__button-box">
              <button className="movies__button" type="button">Ещё</button>
            </div>
          </>
        ) : ( <p className="movies__search-message">{searchMessage}</p>)}
    </main>
  )
}

export default Movies;