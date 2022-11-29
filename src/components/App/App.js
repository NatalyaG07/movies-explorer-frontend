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

  const history = useHistory();
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    checkToken();
  }, [history, isLoggedIn]);

  useEffect(() => {
    // const token = localStorage.getItem('jwt');

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
  }

  function checkToken() {
    // const jwt = localStorage.getItem('jwt');
  // const token = localStorage.getItem('jwt');
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
  }
  

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
            <Movies />
            <Footer />
          </Route>
  
          <Route path="/saved-movies">
            <Header isLoggedIn={isLoggedIn} />
            <SavedMovies />
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
