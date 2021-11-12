import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import hand from "../../assets/hand.png";
import handHoldingCoin from "../../assets/hand-holding-coin.png";

export const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.content}>
        <h1>CRYPTO</h1>
        <h1>WALLET</h1>
        <p>
          Send and Receive <span>Any</span> Cryptocurrency
        </p>
        <button>Download now</button>
      </div>
      <img src={hand} alt="hand" />
      <img src={handHoldingCoin} alt="hand holding coin" />
    </div>
  );
};
