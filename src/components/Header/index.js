import SearchInput from "../../utils/SearchInput";
import styles from "./header.module.scss";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import HamburgerIcon from './HamburgerIcon'
import { useWindowSize } from "../../hooks/useWindowSize";
const Header = ({onHamburgerClick, setOnHamburgerClick}) => {
  const [searchTxt, setSearchTxt] = useState();
  const {width: deviceWidth} = useWindowSize();

  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        {deviceWidth <= 1024 ?<div className={styles.hamBurger}>
          <HamburgerIcon onClick={() => setOnHamburgerClick(!onHamburgerClick)}/>
          </div> : ""}
      <div className={styles.logo}>
        <img
          src={
            "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
          }
          alt="logo"
        />
      </div>
      <div className={styles.name}>A.T.Inks</div>
      <div className={styles.searchWrapper}>
        <SearchInput
          searchTxt={searchTxt}
          setSearchTxt={setSearchTxt}
          className={{}}
        />
      </div>
      </div>
      <div className={styles.rightSection}>
        <div className={`${styles.logo} ${styles.logoExt}`}>
          <img
            src={
              "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
            }
            alt="logo"
          />
        </div>
        <AiOutlineDown className={styles.downArrow} size={12}/>
        <div className={styles.profileImage}>
          <img src="https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg" alt="img"/>
        </div>
        <div className={styles.userSection}>
            <div className={styles.role}>User Admin</div>
            <div className={styles.email}>user.admin@guest.in</div>
        </div>
        <AiOutlineDown className={styles.downArrow} size={12}/>
        <div className={styles.dummy}></div>
      </div>
    </div>
  );
};

export default Header;
