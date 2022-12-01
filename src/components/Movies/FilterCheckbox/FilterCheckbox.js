import "./FilterCheckbox.css";

function FilterCheckbox({ filterCheckboxMovies, onSelectShortMovie, isSelectedShortMovie }) {

  return(
    <div className="filter-checkbox">
        <div className="filter-checkbox__box" onClick={onSelectShortMovie}>
          <div className={`seach-short__item ${ isSelectedShortMovie && "seach-short__item_is-selected" }`} onClick={filterCheckboxMovies}/>
        </div>
        
        <p className="filter-checkbox__name">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;