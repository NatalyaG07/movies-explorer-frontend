import './Profile.css';

import React from 'react';
import { useEffect} from "react";
import { Link} from "react-router-dom";


import FormValidation from "../../utils/FormValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ 
  handleLogin, 
  updateUser, 
  submitError, 
  isLoggedIn,
  submitProfileResOk,
  setSavedMovies }) {

  const FormValidationCallback = FormValidation();
  const { name, email } = FormValidationCallback.values;
  const { handleChange, errors, isValid, resetForm, setValues } = FormValidationCallback;

  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    updateUser({ name, email });
    resetForm();
  }

  function signOut() {
    localStorage.clear();
    setSavedMovies([]);
    handleLogin();
  }

  useEffect(() => {
    if (isLoggedIn) {
      setValues({ 
        name: currentUser.name,
        email: currentUser.email,
       })
    }
  }, [currentUser]);

  return (
    <form className="profile" name="profile" method="post" noValidate onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>

        <label className="profile__label">
          Имя
          <span className="profile__error">{errors.name}</span>
          <input
              className="profile__input"
              type="text"
              placeholder="Введите имя"
              name="name"
              value={name || ""}
              onChange={handleChange}
            />
        </label>

        <label className="profile__label">
          E-mail
          <span className="profile__error">{errors.email}</span>
          <input
              className="profile__input"
              type="text"
              placeholder="Введите почту"
              name="email"
              value={email || ""}
              onChange={handleChange}
            />
        </label>

        <p className={`profile__submit-response 
          ${submitError && "profile__submit-response_error"} 
          ${submitProfileResOk && "profile__submit-response_ok"}`}>
            {`${submitError ? "Что-то пошло не так! Попробуйте ещё раз" : ""}
            ${submitProfileResOk ?  "Данные успешно обновлены" : ""}`}
        </p>

        <div className="profile__buttons">
            <button 
            className={`profile__button ${!isValid || (name === currentUser.name && email === currentUser.email) ? "profile__button_disable" : "" }`} 
            type="submit" 
            disabled={!isValid || (name === currentUser.name && email === currentUser.email) }>
              Редактировать
            </button>

            <Link className="profile__link" to="/" onClick={signOut}>Выйти из аккаунта</Link>
        </div>
    </form>);
}

export default Profile;