import { NotificationsPanel } from "../NotificationsPanel";
import { TopArtists } from "../TopArtists";
import styles from "./styles.module.scss";

export const SideDetails = () => {
  return (
    <div className={styles.sideDetailsContainer}>
      <NotificationsPanel />
      <TopArtists />
    </div>
  );
};
