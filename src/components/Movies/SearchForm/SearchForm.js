import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('click search');
  }

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <fieldset className="search-form__group  search-form__group_icon">
          <input className="search-form__input" placeholder="Фильм" type="search"required/>
          <button className="search-form__button" type="submit">Найти</button>
        </fieldset>
      </form>
      
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
