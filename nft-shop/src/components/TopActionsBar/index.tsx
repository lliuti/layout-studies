import { SearchInput } from "../SearchInput";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { BsFillChatFill } from "react-icons/bs";
import styles from "./styles.module.scss";

export const TopActionsBar = () => {
  return (
    <div className={styles.topActionsBar}>
      <SearchInput />
      <div className={styles.topActionsButtons}>
        <button>
          <RiUploadCloud2Fill size={22} />
        </button>
        <button>
          <BsFillChatFill size={22} />
        </button>
      </div>
    </div>
  );
};
