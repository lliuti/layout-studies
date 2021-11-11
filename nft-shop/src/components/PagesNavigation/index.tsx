import styles from "./styles.module.scss";
import { MdOutlineSpaceDashboard, MdOutlineFeed } from "react-icons/md";
import { RiHeart3Line } from "react-icons/ri";
import { BiTrendingUp, BiDollar } from "react-icons/bi";

export const PagesNavigation = () => {
  return (
    <div className={styles.pagesNavigationContainer}>
      <div className={`${styles.item} ${styles.activeItem}`}>
        <div className={styles.itemIcon}>
          <MdOutlineFeed size={24} />
        </div>
        <p>Feed</p>
      </div>
      <div className={styles.item}>
        <div className={styles.itemIcon}>
          <MdOutlineSpaceDashboard size={24} />
        </div>
        <p>Dashboard</p>
      </div>
      <div className={styles.item}>
        <div className={styles.itemIcon}>
          <RiHeart3Line size={24} />
        </div>
        <p>Saved</p>
      </div>
      <div className={styles.item}>
        <div className={styles.itemIcon}>
          <BiTrendingUp size={24} />
        </div>
        <p>Trending</p>
      </div>
      <div className={styles.item}>
        <div className={styles.itemIcon}>
          <BiDollar size={24} />
        </div>
        <p>Wallet</p>
      </div>
    </div>
  )
}