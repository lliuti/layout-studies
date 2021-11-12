import styles from "./styles.module.scss";
import { NFTBanner } from "../NFTBanner";
import { TopActionsBar } from "../TopActionsBar";
import { FeedActionsBar } from "../FeedActionsBar";
import { NFTFeed } from "../NFTFeed";

export const Feed = () => {
  return (
    <div className={styles.feedPageContainer}>
      <TopActionsBar />
      <NFTBanner />

      <div className={styles.feedContainer}>
        <FeedActionsBar />
        <NFTFeed />
      </div>
    </div>
  );
};
