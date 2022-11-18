import './Logo.css';

import { Link} from "react-router-dom";

import logo from '../../images/logo.svg';


function Logo() {

  return(
    <Link className="logo__link" to="/"><img className="logo__img" src={logo} alt="logo" /></Link>
  )
}

export default Logo;