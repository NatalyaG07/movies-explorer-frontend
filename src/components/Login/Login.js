import "./Login.css";
import {useState} from 'react';
import { useHistory} from 'react-router-dom';

import FormHeader from "../FormHeader/FormHeader";
import Form from "../Form/Form";

import FormValidation from "../../utils/FormValidation";
import * as MainApi from "../../utils/MainApi";

function Login({ handleLogin }) {

  const [submitError, setSubmitError] = useState(false);

  const FormValidationCallback = FormValidation();
  const { email, password } = FormValidationCallback.values;
  const { handleChange, errors, isValid, resetForm } = FormValidationCallback;

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    MainApi
    .authorize(email, password)
    .then((data) => {
      if(data.message) {
        console.log(data.message);
        setSubmitError(true);
      }
      
      if(data.token) {
        setSubmitError(false);
        handleLogin();
        history.push("/movies");
      }
    })
    .catch((err) => {
      console.log(err);
      setSubmitError(true);
    });

    resetForm();
  }

  return (
    <section className="register">
      <FormHeader text="Рады видеть!"/>

      <Form buttonText="Войти"
        navigationText="Ещё не зарегистрированы?"
        linkText="Регистрация" 
        linkRout="/signup"
        name="login"
        onSubmit={handleSubmit}
        submitError={submitError}
        isValid={isValid} 
        >

          <label className="register__label">
            E-mail
            <input 
              className="register__input"
              type="email"
              name="email"
              required
              placeholder="Email"
              value={email || ""}
              onChange={handleChange}
            />
            <span className="register__error">{errors.email}</span>
          </label>

          <label className="register__label">
            Пароль
            <input 
              className="register__input"
              type="password"
              name="password"
              required
              placeholder="пароль"
              value={password || ""}
              onChange={handleChange}
            />
            <span className="register__error">{errors.password}</span>
          </label>

       </Form>
    </section>
  );
}

export default Login;