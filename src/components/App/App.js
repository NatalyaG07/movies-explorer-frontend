import "./App.css";

import { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import Header from "../Header/Header";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register"
import Login from "../Login/Login";
import Page404 from "../Page404/Page404";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function toggleIsLoggedIn() {
  //   setIsLoggedIn(isLoggedIn => !isLoggedIn);
  // }

  return (
    <div className="App">

      <Switch>
        <Route  exact path="/">
          <Header isLoggedIn={isLoggedIn} />
          <Main />
          <Footer />
        </Route>

        <Route  exact path="/signup">
          <Register />
        </Route>

        <Route  exact path="/signin">
          <Login />
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
          <Profile />
          <Footer />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
