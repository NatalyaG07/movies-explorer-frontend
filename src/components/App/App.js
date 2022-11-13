import "./App.css";

import { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import Header from "../Header/Header";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // function toggleIsLoggedIn() {
  //   setIsLoggedIn(isLoggedIn => !isLoggedIn);
  // }

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />

      <Switch>
        <Route  exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
