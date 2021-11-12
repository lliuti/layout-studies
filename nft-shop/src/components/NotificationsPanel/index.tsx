import styles from "./styles.module.scss";

import art1 from "../../assets/art-1.jpg";

export const NotificationsPanel = () => {
  return (
    <div className={styles.notificationsPanelContainer}>
      <div className={styles.topBar}>
        <h1>Notifications</h1>
        <button>Newest</button>
      </div>

      <div className={styles.notificationList}>
        <div className={styles.notification}>
          <img src={art1} alt="" />
          <div className={styles.notificationText}>
            <h2>NFT #00123</h2>
            <p>Has been sold for 1.3 ETH</p>
          </div>
        </div>
        <div className={styles.notification}>
          <img src={art1} alt="" />
          <div className={styles.notificationText}>
            <h2>NFT #00123</h2>
            <p>Has been sold for 1.3 ETH</p>
          </div>
        </div>
        <div className={styles.notification}>
          <img src={art1} alt="" />
          <div className={styles.notificationText}>
            <h2>NFT #00123</h2>
            <p>Has been sold for 1.3 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};
