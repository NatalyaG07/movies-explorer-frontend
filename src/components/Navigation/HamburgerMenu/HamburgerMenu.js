import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

import icon from "../../../images/navigation__icon.svg";

function HamburgerMenu({ isOpen, toggleHamburger }) {

  return (
    <>
      { isOpen && (
        <div className="hamburger">
          <button className="hamburger__close" onClick={toggleHamburger}></button>
          <ul className="hamburger__menu">
              <li><Link className="hamburger__link" onClick={toggleHamburger} to="/">Главная</Link></li>
              <li><Link className="hamburger__link" onClick={toggleHamburger} to="/movies">Фильмы</Link></li>
              <li><Link className="hamburger__link" onClick={toggleHamburger} to="/saved-movies">Сохранённые фильмы</Link></li>
              <li>
                <div className="hamburger__profile">
                  <Link className="hamburger__link" onClick={toggleHamburger} to="/profile">Аккаунт</Link>
                  <div className="hamburger__icon">
                    <img className="hamburger__img" src={icon} alt="Иконка профиля"></img>
                  </div>
                </div>
              </li>
          </ul>
        </div>
        )
      }
    </>
  )
}

export default HamburgerMenu;