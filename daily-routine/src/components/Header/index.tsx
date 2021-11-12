import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <h1>spruzzo</h1>
      </div>
      <button>Sign Up</button>
    </div>
  );
};
