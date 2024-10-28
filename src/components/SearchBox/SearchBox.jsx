import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const action = changeFilter(event.target.value);
    dispatch(action);
  };

  return (
    <div className={css.input}>
      <label>Find contacts by name</label>
      <input
        className={css.input_main}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
