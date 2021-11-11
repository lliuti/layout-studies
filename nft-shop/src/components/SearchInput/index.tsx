import { BsSearch } from "react-icons/bs";
import styles from "./styles.module.scss";

export const SearchInput = () => {
  return (
    <label htmlFor="searchInput" className={styles.inputBox}>
      <BsSearch size={14} />
      <input
        id="searchInput"
        name="searchInput"
        type="text"
        placeholder="Search"
      />
    </label>
  );
};
