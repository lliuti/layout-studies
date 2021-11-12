import { Header } from "../../components/Header";
import { TopText } from "../../components/TopText";
import styles from "./styles.module.scss";
import mobile from "../../assets/mobile.svg";

export const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <TopText />
      <div className={styles.improveContainer}>
        <h2>
          <span>Improve</span> your Daily Routine with statistics, routines and
          tons of customizations
        </h2>
        <button>Start Now</button>
      </div>
      <div className={styles.cleaningContainer}>
        <h1>🧹</h1>
        <h1>Let the cleaning</h1>
        <h2>be a pleasure!</h2>
      </div>
      <div className={styles.boxContainer}>
        <div className={styles.leftContainer}>
          <h1>Manage your household chores</h1>
          <button>Start Now</button>
        </div>
        <div className={styles.rightContainer}>
          <img src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
};
