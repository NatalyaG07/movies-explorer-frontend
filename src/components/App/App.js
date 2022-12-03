import "./App.css";

import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';

import Header from "../Header/Header";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register"
import Login from "../Login/Login";
import Page404 from "../Page404/Page404";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [submitProfileError, setSubmitProfileError] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const history = useHistory();
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    checkToken();
  }, [history, isLoggedIn]);

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
  }, []);

  useEffect(() => {
    if(token) {
      MainApi
      .getUserInfo(token)
        .then(userData => {
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  function toggleIsLoggedIn() {
    setIsLoggedIn(isLoggedIn => !isLoggedIn);
  };

  function checkToken() {
    if(token) {
      MainApi.checkToken(token).then((res) => {
        if(res) {
          setIsLoggedIn(true);
          history.push("/movies");
        } else {
          localStorage.removeItem("jwt");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  function handleUpdateUser({ name, email }) {
    MainApi
      .editProfile({
        name,
        email,
      }, token )
      .then((updateUser) => {
        setCurrentUser(updateUser);
        setSubmitProfileError(false);
      })
      .catch((err) => {
        setSubmitProfileError(true);
        console.log(err);
      });
  };

  function handleLikeButton(movie) {
    const isLikedMovie = savedMovies.find((saved) => saved.movieId === movie.id);

    if(isLikedMovie) {
      handleRemoveSavedMovies(isLikedMovie);
    } else {
      handleAddSavedMovies(movie);
    }
  }

  function handleAddSavedMovies(movie) {
    MainApi
      .addSavedMovies(movie, token)
      .then((newSavedMovies) => {
        setSavedMovies([newSavedMovies.movie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleRemoveSavedMovies(movie) {
    MainApi
      .removeSavedMovies(movie._id, token)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((m) => m.movieId !== movie.movieId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
  
        <Switch>
          <Route  exact path="/">
            <Header isLoggedIn={isLoggedIn} type="main"/>
            <Main />
            <Footer />
          </Route>
  
          <Route  exact path="/signup">
            <Register handleLogin={toggleIsLoggedIn} />
          </Route>
  
          <Route  exact path="/signin">
            <Login handleLogin={toggleIsLoggedIn} />
          </Route>
  
          <ProtectedRoute 
          path="/movies"
          isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <Movies
            handleRemoveSavedMovies={handleRemoveSavedMovies}
            savedMovies={savedMovies}
            handleLikeButton={handleLikeButton}
            />
            <Footer />
          </ProtectedRoute>
  
          <ProtectedRoute 
          path="/saved-movies"
          isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <SavedMovies 
            setSavedMovies={setSavedMovies} 
            savedMovies={savedMovies}
            handleRemoveSavedMovies={handleRemoveSavedMovies}
            />
            <Footer />
          </ProtectedRoute>
  
          <ProtectedRoute 
          path="/profile"
          isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <Profile 
            handleLogin={toggleIsLoggedIn} 
            updateUser={handleUpdateUser}
            submitError={submitProfileError}/>
            <Footer />
          </ProtectedRoute>
  
          <Route path="*">
            <Page404 />
          </Route>
  
        </Switch>
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;
