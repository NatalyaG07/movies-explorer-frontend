import "./Form.css";

import { Link } from 'react-router-dom';

function Form({ children, name, buttonText, navigationText, linkText, linkRout, onSubmit }) {

  

  return (
    <div className="form-content">
      <form className="form" name={name}  onSubmit={onSubmit}>
        {children}
        <button className="form__button" type="submit">{buttonText}</button>
      </form>
  
      <div className="form-content__navigation">
        <p className="form-content__text">{navigationText}</p>
        <Link to={linkRout} className="form-content__link">{linkText}</Link>
      </div>
    </div>
  )
}

export default Form;