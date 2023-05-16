import styles from "./search-input.module.scss";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchInput = ({ setSearchTxt, searchTxt, className }) => {
  return (
    <div className={`${styles.searchContainer} ${className}`}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="    Search..."
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <div className={styles.searchIconContainer}>
        {!searchTxt && <BiSearchAlt2 className={styles.searchIcon} />}
      </div>
    </div>
  );
};

export default SearchInput;
