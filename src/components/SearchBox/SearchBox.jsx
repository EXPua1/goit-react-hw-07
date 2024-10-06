import css from './SearchBox.module.css'


const SearchBox = ({ value, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
   <div className={css.input}>
 <label >Find contacts by name</label>
    <input className={css.input_main}
      type="text"
      value={value} 
      onChange={handleChange} 
    />
   </div>
  );
};

export default SearchBox;
