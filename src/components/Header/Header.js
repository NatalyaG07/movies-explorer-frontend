import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn, type }) {

  return(
    <header className={`Header ${type === "main" && "Header_isLoggedInMain"}`}>
        <Logo />
        <Navigation isLoggedIn={isLoggedIn}/>
    </header>
  )
}

export default Header;