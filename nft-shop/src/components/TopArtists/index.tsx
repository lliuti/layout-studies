import styles from "./styles.module.scss";

import artistPicture from "../../assets/art-2.jpg";

export const TopArtists = () => {
  return (
    <div className={styles.topArtistsContainer}>
      <div className={styles.topBar}>
        <h1>Top Artist</h1>
        <button>Today</button>
      </div>
      <div className={styles.artistList}>
        <div className={styles.artistItem}>
          <img src={artistPicture} alt="" />
          <div className={styles.artistDetails}>
            <h2>Mia Evelyn</h2>
            <p>16 NFTs</p>
          </div>
          <button>Follow</button>
        </div>

        <div className={styles.artistItem}>
          <img src={artistPicture} alt="" />
          <div className={styles.artistDetails}>
            <h2>Mia Evelyn</h2>
            <p>16 NFTs</p>
          </div>
          <button>Follow</button>
        </div>

        <div className={styles.artistItem}>
          <img src={artistPicture} alt="" />
          <div className={styles.artistDetails}>
            <h2>Mia Evelyn</h2>
            <p>16 NFTs</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
};
