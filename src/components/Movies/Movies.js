import "./Movies.css";
import {useState, useEffect, useCallback} from "react";

import { moviesApi } from "../../utils/MoviesApi";

import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";

function Movies({ handleRemoveSavedMovies, savedMovies, handleLikeButton }) {

  const [movies, setMovies] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [onPreloader, setOnPreloader] = useState(false);
  const [nextMovies, setNextMovies] = useState(movieCounter());
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);
  // const [shortMovie, setShortMovie] = useState([]);

  // const onSelectShortMovie = useCallback(
  //   () => setIsSelectedIsShortMovie(!isSelectedShortMovie),
  //   [isSelectedShortMovie]
  // );
  function onSelectShortMovie() {
    setIsSelectedIsShortMovie(isSelectedShortMovie => !isSelectedShortMovie);
    localStorage.setItem("isSelectedShortMovie", !isSelectedShortMovie);
  }


  useEffect(() => {
    setNextMovies(movieCounter());
    loopWithSlice(0, movieCounter());
  }, [movies]);

  function filterMovies(movies) {
    const filteredMovie = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(keyWord.toLowerCase())
    );

    if(filteredMovie.length === 0 && isSelectedShortMovie) {
      setSearchMessage("Ничего не найдено");
    }
    setMovies(filteredMovie);
    localStorage.setItem("filteredMovie", JSON.stringify(filteredMovie));
    localStorage.setItem("keyWord", JSON.stringify(keyWord));
    // localStorage.setItem("isSelectedShortMovie", JSON.stringify(isSelectedShortMovie));
    // localStorage.removeItem("filtredCheckboxMovies");
  }

  function handleSearchFilms() {
    setOnPreloader(true);
    debugger

    if(localStorage.getItem("allMovies")) {
      filterMovies(JSON.parse(localStorage.allMovies));
      setMoviesToShow([]);
      setOnPreloader(false);
    } else {
      moviesApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem("allMovies", JSON.stringify(movies));
        filterMovies(movies);
        setMoviesToShow([]);
        setOnPreloader(false);
      })
      .catch(() => {
        setSearchMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      });
    }
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

  function filterCheckboxMovies(movies) {
    const filteredMovie = movies.filter((movie) =>
    movie.duration <= 40);

    if(filteredMovie.length === 0 && isSelectedShortMovie) {
      setSearchMessage("Ничего не найдено");
    }
    setMoviesToShow(filteredMovie);
    // localStorage.setItem("filtredCheckboxMovies", JSON.stringify(filteredMovie));
    localStorage.setItem("keyWord", JSON.stringify(keyWord));
    // localStorage.setItem("isSelectedShortMovie", JSON.stringify(isSelectedShortMovie));
    // localStorage.removeItem("filteredMovie");
  }

  useEffect(() => {
    if(!(localStorage.filteredMovie)) return;
    
    if(isSelectedShortMovie) {
      filterCheckboxMovies(JSON.parse(localStorage.filteredMovie));
    } else {
      setMoviesToShow(JSON.parse(localStorage.filteredMovie));
    }
  }, [isSelectedShortMovie]);
  // useEffect(() => {
  //   if(localStorage.getItem("filteredMovie")) {
  //     setMovies(JSON.parse(localStorage.filteredMovie));
  //     setIsSelectedIsShortMovie(JSON.parse(localStorage.isSelectedShortMovie));
  //     setKeyWord(JSON.parse(localStorage.keyWord));
  //   }

  //   if(localStorage.getItem("filtredCheckboxMovies")) {
  //     setMovies(JSON.parse(localStorage.filtredCheckboxMovies));
  //     setIsSelectedIsShortMovie(JSON.parse(localStorage.isSelectedShortMovie));
  //     onSelectShortMovie();
  //     setKeyWord(JSON.parse(localStorage.keyWord));
  //   }
  // }, []);

  useEffect(() => {
    if(!(localStorage.keyWord)) return;
    setIsSelectedIsShortMovie(localStorage.getItem('isSelectedShortMovie') === 'true');
    setKeyWord(JSON.parse(localStorage.keyWord));
  }, []);

  return(
    <main className="movies">
        <SearchForm
         handleSearchFilms={handleSearchFilms} 
         keyWord={keyWord} 
         setKeyWord={setKeyWord}
         onSelectShortMovie={onSelectShortMovie}
         isSelectedShortMovie={isSelectedShortMovie}
        />

        {onPreloader && <Preloader />}

        {moviesToShow.length > 0 &&  !onPreloader ? (
          <>
            <MoviesCardList type="all-movies" 
            movies={moviesToShow}
            handleRemoveSavedMovies={handleRemoveSavedMovies}
            savedMovies={savedMovies}
            handleLikeButton={handleLikeButton}/>

            <div className="movies__button-box">
              <button 
              className={`movies__button ${moviesToShow.length < movies.length && !isSelectedShortMovie ? ("movies__button_active") : ("") }`}
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