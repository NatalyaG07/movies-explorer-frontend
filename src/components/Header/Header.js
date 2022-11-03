import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {

  return(
    <header className="Header">
        <Logo />
        <Navigation />
    </header>
  )
}

export default Header;