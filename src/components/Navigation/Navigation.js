import "./Navigation.css";
import { Link } from "react-router-dom";

import icon from "../../images/navigation__icon.svg";

function Navigation({ isLoggedIn }) {

  return(
    <>
      {isLoggedIn ? (
        <nav className="navigation navigation_is-logged-in">
          <div className="navigation__films-group">
            <Link className="navigation__films-button navigation__button_hover" to="/movies">Фильмы</Link>
            <Link className="navigation__save-films-button navigation__button_hover" to="/saved-movies">Сохраненные фильмы</Link>
          </div>

          <div className="navigation__profile-group">
            <Link className="navigation__profile-button navigation__button_hover" to="/profile">Аккаунт</Link>
            <div className="navigation__icon">
              <img className="navigatiom__img" src={icon} alt="Иконка профиля"></img>
            </div>
          </div>
          {/* <button className="navigation__menu" onClick={toggleNavTab} type="button"></button> */}
        </nav>
      ) : (
      <nav className="navigation">
        <Link className="navigation__register-button navigation__button_hover" to="/signup">Регистрация</Link>
        <Link className="navigation__login-button navigation__button_hover" to="/signin">Войти</Link>
      </nav>
      )
    } 
  </>
  )
}

export default Navigation;
