import "./SearchForm.css";
import {useState} from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm( {handleSearchFilms, keyWord, setKeyWord} ) {

  // const [keyWord, setKeyWord] = useState('');
  const [error, setError] = useState('');

  function handleChangeKeyWord(e) {
    setKeyWord(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log("click search");

    if (keyWord === '') {
      setError("Нужно ввести ключевое слово");
    } else {
      setError('');
      handleSearchFilms();
    }
  }

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSearch} noValidate autoComplete="off">
        <fieldset className="search-form__group  search-form__group_icon">
          <input
          className="search-form__input" 
          placeholder="Фильм" 
          type="search"
          required
          value={keyWord || ''}
          onChange={handleChangeKeyWord}
          />

          <button className="search-form__button" type="submit">Найти</button>
        </fieldset>
      </form>

      <p className="search-form__input-error">{error}</p>
      
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
