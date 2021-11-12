import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>NFTVERSE</h1>
      <div className={styles.pagesMenu}>
        <a href="#">Token</a>
        <a href="#">NFT</a>
        <a href="#">Swap</a>
        <a href="#">Pool</a>
        <a href="#">Roadmap</a>
      </div>
      <button>Connect Wallet</button>
    </div>
  );
};
