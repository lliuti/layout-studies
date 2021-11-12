import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";

export const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.containerGrid}>
        <div className={styles.contentContainer}>
          <h1>Next-generation Blockchain for Metaverse NFTs</h1>
          <p>
            Scalable decentralized, cross-chain network designed to bring
            non-fungible tokens to everyone
          </p>
          <button>Reade Whitepaper</button>
        </div>
        <img src={logo} alt="Logo image" />
      </div>
    </div>
  );
};
