import "./Movies.css";
import {useState, useEffect} from "react";

import { moviesApi } from "../../utils/MoviesApi";

import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";

function Movies({ handleAddSavedMovies, handleRemoveSavedMovies, savedMovies }) {

  const [movies, setMovies] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [onPreloader, setOnPreloader] = useState(false);
  const [nextMovies, setNextMovies] = useState(movieCounter());
  const [moviesToShow, setMoviesToShow] = useState([]);

  useEffect(() => {
    setNextMovies(movieCounter());
    loopWithSlice(0, movieCounter());
  }, [movies]);

  function filterMovies(movies) {
    const filteredMovie = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(keyWord.toLowerCase())
    );

    if(filteredMovie.length === 0) {
      setSearchMessage("Ничего не найдено");
    }
    setMovies(filteredMovie);
  }

  function handleSearchFilms() {
    setOnPreloader(true);

    moviesApi
    .getMovies()
    .then((movies) => {
      filterMovies(movies);
      setMoviesToShow([]);
      setOnPreloader(false);
    })
    .catch((err) => {
      setSearchMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
    });
  }

  function movieCounter() {
    if (window.innerWidth >= 1280) return 3;

    if (window.innerWidth >= 768) return 2;

    return 1;
  }

  function loopWithSlice(start, end) {

    const sliceMovies = movies.slice(start, end);
    
    setMoviesToShow([...moviesToShow, ...sliceMovies]);
    return (moviesToShow);
  }

  const handleShowMoreMovies = () => {
    loopWithSlice(nextMovies, nextMovies + movieCounter());
    setNextMovies(nextMovies + movieCounter());
  };

  return(
    <main className="movies">
        <SearchForm
         handleSearchFilms={handleSearchFilms} 
         keyWord={keyWord} 
         setKeyWord={setKeyWord}
        />

        {onPreloader && <Preloader />}

        {moviesToShow.length > 0 &&  !onPreloader ? (
          <>
            <MoviesCardList type="all-movies" 
            movies={moviesToShow} 
            handleAddSavedMovies={handleAddSavedMovies} 
            handleRemoveSavedMovies={handleRemoveSavedMovies}
            savedMovies={savedMovies}/>

            <div className="movies__button-box">
              <button 
              className={`movies__button ${moviesToShow.length < movies.length && "movies__button_active"}`} 
              type="button" 
              onClick={handleShowMoreMovies}>
                Ещё
              </button>
            </div>
          </>
        ) : ( <p className="movies__search-message">{searchMessage}</p>)}
    </main>
  )
}

export default Movies;