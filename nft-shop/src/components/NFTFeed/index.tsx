import styles from "./styles.module.scss";
import { nftMockedList } from "../../nft-mocked-list.js";

export const NFTFeed = () => {
  return (
    <div className={styles.nftFeedContainer}>
      {nftMockedList.map((nft) => {
        return (
          <div key={nft.id} className={styles.nftBox}>
            <img src={nft.image} alt={nft.title} />
            <div className={styles.nftDetails}>
              <div className={styles.leftDetails}>
                <h1>{nft.title}</h1>
                <h2>{nft.price}</h2>
                <p>{nft.biding}</p>
              </div>
              <div className={styles.rightDetails}>
                <p>{nft.timeLeft}</p>
                <button>Bid</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
