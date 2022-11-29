import "./Register.css";

import { useState } from "react";
import { useHistory} from 'react-router-dom';

import FormHeader from "../FormHeader/FormHeader";
import Form from "../Form/Form";

import FormValidation from "../../utils/FormValidation";
import * as MainApi from '../../utils/MainApi';

function Register({ handleLogin }) {

  const [submitError, setSubmitError] = useState(false);

  const FormValidationCallback = FormValidation();
  const { email, password, name } = FormValidationCallback.values;
  const { handleChange, errors, isValid, resetForm } = FormValidationCallback;

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    MainApi
    .register(name, email, password)
    .then((res) => {
      if(res) {
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
      <FormHeader text="Добро пожаловать!"/>

      <Form buttonText="Зарегистрироваться"
        navigationText="Уже зарегистрированы?"
        linkText="Войти" 
        linkRout="/signin"
        name="register"
        onSubmit={handleSubmit}
        submitError={submitError}
        isValid={isValid}
        >
          <label className="register__label">
            Имя
            <input 
              className="register__input"
              type="text"
              name="name"
              required
              placeholder="Имя"
              value={name || ""}
              onChange={handleChange}
            />
            <span className="register__error">{errors.name}</span>
          </label>

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

export default Register;