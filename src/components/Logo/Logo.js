import './Logo.css';
import logo from '../../images/logo.svg';


function Logo() {

  return(
    <img className="header__logo" src={logo} alt="logo" />
  )
}

export default Logo;