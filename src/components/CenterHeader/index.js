import styles from "./center-header.module.scss";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import SearchInput from "../../utils/SearchInput";
const CenterHeader = (props) => {
    const [searchTxt, setSearchTxt] = useState('');
  return (
    <div className={styles.main}>
      <div style={{ display: "flex" }}>
        {props?.backBtnclick && (
          <BiArrowBack
            size={24}
            className={styles.backArrow}
            onClick={props.backBtnclick}
          />
        )}
        <div className={styles.heading}>{props.heading}</div>
      </div>
      <div className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <SearchInput searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
        </div>
        <div className={styles.emptyBox}></div>
      </div>
    </div>
  );
};

export default CenterHeader;
