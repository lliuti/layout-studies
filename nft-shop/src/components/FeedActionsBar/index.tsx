import styles from "./styles.module.scss";

export const FeedActionsBar = () => {
  return (
    <div className={styles.feedActionsBarContainer}>
      <div className={styles.feedViewingContainer}>
        <h1>Feed</h1>
        <select name="" id="">
          <option value="Following">Following</option>
          <option value="Test">Test</option>
        </select>
      </div>
      <div className={styles.categoryButtons}>
        <a href="#" className={styles.selectedCategoryButton}>
          All
        </a>
        <a href="#">Art</a>
        <a href="#">Games</a>
        <a href="#">Illustration</a>
      </div>
    </div>
  );
};
