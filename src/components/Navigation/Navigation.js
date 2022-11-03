import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {

  return(
    <nav className="navigation">
      <Link className='navigation__register-button' to="/signup">Регистрация</Link>
      <Link className='navigation__login-button' to="/signin">Войти</Link>
    </nav>
  );
        // <>
        //     <nav className="navigation navigation_logged">
        //         <Link className='navigation__link navigation__link_logged' to="/movies">Фильмы</Link>
        //         <Link className='navigation__link navigation__link_logged' to="/saved-movies">Сохраненные фильмы</Link>
        //         <Link className='navigation__link navigation__link_logged navigation__link_profile' to="/profile">Аккаунт</Link>
        //         <button className="navigation__menu" onClick={toggleNavTab} type="button"></button>
        //     </nav>

        // </>;
}

export default Navigation;
