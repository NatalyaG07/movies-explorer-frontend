import "./Login.css";
import {useState} from 'react';

import FormHeader from "../FormHeader/FormHeader";
import Form from "../Form/Form";

function Login() {

  const [email , setEmail] = useState('NatG@mail.ru');
  const [password , setPassword] = useState('12345678');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="register">
      <FormHeader text="Рады видеть!"/>

      <Form buttonText="Войти"
        navigationText="Ещё не зарегистрированы?"
        linkText="Регистрация" 
        linkRout="/signup"
        name="login"
        onSubmit={handleSubmit} >

          <label className="register__label">
            E-mail
            <input 
              className="register__input"
              type="email"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
            <span className="register__error"></span>
          </label>

          <label className="register__label">
            Пароль
            <input 
              className="register__input"
              type="password"
              name="password"
              required
              placeholder="пароль"
              value={password}
              onChange={setPassword}
            />
            <span className="register__error"></span>
          </label>

       </Form>
    </section>
  );
}

export default Login;