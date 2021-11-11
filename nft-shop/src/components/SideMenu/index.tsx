import styles from "./styles.module.scss";
import logo from "../../assets/diamond.png";
import { PagesNavigation } from "../PagesNavigation";
import { SettingsNavigation } from "../SettingsNavigation";

export const SideMenu = () => {
  return (
    <div className={styles.sideMenuContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" />
        <h1>NFT</h1>
      </div>
      <PagesNavigation />
      <SettingsNavigation />
    </div>
  );
};
