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

import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [submitProfileError, setSubmitProfileError] = useState(false);
  // const [moviesToShow, setMoviesToShow] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  // const [likeActive, setlikeActive] = useState(false);

  const history = useHistory();
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    checkToken();
  }, [history, isLoggedIn]);

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

  function handleAddSavedMovies(movie) {
    MainApi
      .addSavedMovies(movie, token)
      .then((newSavedMovies) => {
        console.log(newSavedMovies.data);
        setSavedMovies([newSavedMovies.data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleRemoveSavedMovies(movie) {
    MainApi
      .removeSavedMovies(movie._id, token)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((m) => m.movieId !== movie.id));
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
            <Header isLoggedIn={isLoggedIn} />
            <Main />
            <Footer />
          </Route>
  
          <Route  exact path="/signup">
            <Register handleLogin={toggleIsLoggedIn} />
          </Route>
  
          <Route  exact path="/signin">
            <Login handleLogin={toggleIsLoggedIn} />
          </Route>
  
          <Route path="/movies">
            <Header isLoggedIn={isLoggedIn} />
            <Movies handleAddSavedMovies={handleAddSavedMovies}
            handleRemoveSavedMovies={handleRemoveSavedMovies}
            savedMovies={savedMovies}
            />
            <Footer />
          </Route>
  
          <Route path="/saved-movies">
            <Header isLoggedIn={isLoggedIn} />
            <SavedMovies 
            token={token} 
            setSavedMovies={setSavedMovies} 
            savedMovies={savedMovies} 
            handleAddSavedMovies={handleAddSavedMovies} 
            handleRemoveSavedMovies={handleRemoveSavedMovies}
            />
            <Footer />
          </Route>
  
          <Route path="/profile">
            <Header isLoggedIn={isLoggedIn} />
            <Profile 
            handleLogin={toggleIsLoggedIn} 
            updateUser={handleUpdateUser}
            submitError={submitProfileError}/>
            <Footer />
          </Route>
  
          <Route path="*">
            <Page404 />
          </Route>
  
        </Switch>
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;
