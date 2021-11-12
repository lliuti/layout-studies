import styles from "./styles.module.scss";

export const NFTBanner = () => {
  return (
    <div className={styles.nftBannerContainer}>
      <div className={styles.nftBannerContent}>
        <h2>Rocket NFT</h2>
        <h3>1.3 ETH</h3>
        <p>Uploaded by Lucas Liuti</p>
        <button>Bid Now</button>
      </div>
    </div>
  );
};
