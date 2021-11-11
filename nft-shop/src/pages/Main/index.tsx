import { Feed } from "../../components/Feed"
import { SideDetails } from "../../components/SideDetails"
import { SideMenu } from "../../components/SideMenu"
import styles from "./styles.module.scss";

export const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <SideMenu />
      <Feed />
      <SideDetails />
    </div>
  )
}