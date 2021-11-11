import { VscSettingsGear } from "react-icons/vsc";
import { MdHelpOutline } from "react-icons/md";
import styles from "./styles.module.scss";

export const SettingsNavigation = () => {
  return (
    <div className={styles.settingsNavigationContainer}>
      <div className={styles.item}>
        <div className={styles.itemIcon}>
          <VscSettingsGear size={24} />
        </div>
        <p>Settings</p>
      </div>
      <div className={styles.item}>
        <div className={styles.itemIcon}>
          <MdHelpOutline size={24} />
        </div>
        <p>Help Center</p>
      </div>
    </div>
  );
};
