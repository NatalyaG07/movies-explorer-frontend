import "./FilterCheckbox.css";
import { useCallback, useState } from "react";

function FilterCheckbox({ filterCheckboxMovies, onSelectShortMovie, isSelectedShortMovie }) {

  // const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  // const onSelectShortMovie = useCallback(
  //   () => setIsSelectedIsShortMovie(!isSelectedShortMovie),
  //   [isSelectedShortMovie]
  // );

  function ggg() {
    console.log("Клик!!!")
    filterCheckboxMovies();
  }

  return(
    <div className="filter-checkbox">
        <div className="filter-checkbox__box" onClick={onSelectShortMovie}>
          <div className={`seach-short__item ${ isSelectedShortMovie && "seach-short__item_is-selected" }`} onClick={ggg}/>
        </div>
        
        <p className="filter-checkbox__name">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;