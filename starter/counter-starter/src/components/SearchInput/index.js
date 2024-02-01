import propTypes from "prop-types";
import styles from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="List"
        onChange={props.onChange}
        value={props.value}
      />
      <button className={styles.addButton} type="submit" key="submit">
        add
      </button>
    </form>
  );
};

SearchInput.propTypes = {
  onSubmit: propTypes.func,
  onChange: propTypes.func,
  value: propTypes.string,
};

export default SearchInput;
