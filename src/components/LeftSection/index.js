import styles from "./left-section.module.scss";
import { MdDashboard } from "react-icons/md";
import { FaCubes, FaCube, FaHeart } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";

const LeftSection = () => {
    const items = [
        {
            img: <MdDashboard />,
            txt: "Dashboard",
        },
        {
            img: <FaCubes />,
            txt: "All Products",
        },
        {
            img: <FaCube />,
            txt: "Orders",
        },
        {
            img: <FaHeart />,
            txt: "Favourites",
        },
        {
            img: <AiFillPieChart />,
            txt: "New Arrival",
        },
    ]
  return (
    <div className={styles.main}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <img
            src={
              "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
            }
            alt="logo"
          />
        </div>
        <div className={styles.name}>A.T.Inks</div>
      </div>
      <div className={styles.items}>
            {items.map((item, i) => {
                return <div className={`${styles.itemWrapper} ${i === 1 ? styles.active : ''}`}>
                    <div className={`${styles.itemImage} ${i === 1 ? styles.active : ''}`}>{item.img}</div>
                    <div className={`${styles.itemTxt} ${i === 1 ? styles.active : ''}`}>{item.txt}</div>
                </div>
            })}
      </div>
    </div>
  );
};

export default LeftSection;
