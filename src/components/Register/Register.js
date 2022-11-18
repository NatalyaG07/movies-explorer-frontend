import "./Register.css";
import {useState} from 'react';

import FormHeader from "../FormHeader/FormHeader";
import Form from "../Form/Form";

function Register() {

  const [name, setName] = useState('Наталья');
  const [email , setEmail] = useState('NatG@mail.ru');
  const [password , setPassword] = useState('12345678');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="register">
      <FormHeader text="Добро пожаловать!"/>

      <Form buttonText="Зарегистрироваться"
        navigationText="Уже зарегистрированы?"
        linkText="Войти" 
        linkRout="/signin"
        name="register"
        onSubmit={handleSubmit} >
          <label className="register__label">
            Имя
            <input 
              className="register__input"
              type="text"
              name="name"
              required
              placeholder="Имя"
              value={name}
              onChange={handleChangeName}
            />
            <span className="register__error"></span>
          </label>

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

export default Register;