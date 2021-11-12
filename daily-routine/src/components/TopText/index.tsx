import styles from "./styles.module.scss";

export const TopText = () => {
  return (
    <div className={styles.topTextContainer}>
      <h1>Improve</h1>
      <h2>Your Daily</h2>
      <h1>Routine 🤘🏻</h1>
      <button>Start Now</button>
    </div>
  );
};
