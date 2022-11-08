import './Logo.css';

import { Link} from "react-router-dom";

import logo from '../../images/logo.svg';


function Logo() {

  return(
    <Link to="/"><img className="header__logo" src={logo} alt="logo" /></Link>
  )
}

export default Logo;