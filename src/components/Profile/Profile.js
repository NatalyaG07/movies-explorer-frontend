import './Profile.css';
import {useState} from 'react';
import { Link } from "react-router-dom";

function Profile() {

  const [name, setName] = useState('Наталья');
  const [email , setEmail] = useState('Nat1306@mail.ru');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log("Сабмит формы редактирования профиля");
  }

  return (
    <form className="profile" name="profile" method="post" noValidate onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {name}!</h2>

        <label className="profile__label">
          Имя
          <input
              className="profile__input"
              type="text"
              placeholder="Введите имя"
              name="name"
              value={name}
              onChange={handleChangeName}
            />
        </label>

        <label className="profile__label">
          E-mail
          <input
              className="profile__input"
              type="text"
              placeholder="Введите почту"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
        </label>

        <div className="profile__buttons">
            <button className="profile__button" type="submit">Редактировать</button>
            <Link className="profile__link" to="/">Выйти из аккаунта</Link>
        </div>
    </form>);
}

export default Profile;