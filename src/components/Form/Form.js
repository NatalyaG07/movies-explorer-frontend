import "./Form.css";

import { Link } from 'react-router-dom';

function Form({
  children, 
  name, 
  buttonText, 
  navigationText, 
  linkText, 
  linkRout, 
  onSubmit, 
  submitError,
  isValid }) {

  return (
    <div className="form-content">
      <form className="form" name={name}  onSubmit={onSubmit} noValidate>
        {children}
        <p className={`form__submit-error ${submitError && "form__submit-error_active"}`}>Что-то пошло не так! Попробуйте ещё раз</p>
        <button className={`form__button ${!isValid && "form__button_disable"}`} type="submit" disabled={!isValid}>{buttonText}</button>
      </form>
  
      <div className="form-content__navigation">
        <p className="form-content__text">{navigationText}</p>
        <Link to={linkRout} className="form-content__link">{linkText}</Link>
      </div>
    </div>
  )
}

export default Form;