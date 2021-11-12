import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLinks}>
        <a href="#">Features</a>
        <a href="#">Price</a>
        <a href="#">Help</a>
        <a href="#">Company</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
      </div>
    </div>
  );
};
