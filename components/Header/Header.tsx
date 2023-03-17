import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Header.module.scss";

interface Props {
  list: string[];
  setList: Dispatch<SetStateAction<string[]>>;
}

const Header: React.FC<Props> = ({ list, setList }) => {
  const [text, setText] = useState<string>("");

  const upDateList = () => {
    if (text != "") {
      setList([...list, text]);
      setText("");
    }
  };

  return (
    <div className={styles.header}>
      <h1>To Do App</h1>
      <div className={styles.header__input}>
        <input
          type="text"
          placeholder="Write Item"
          value={text}
          onChange={(e) => setText(e.target.value)
          }
        />
        <button type="submit" onClick={upDateList}>
          +
        </button>
      </div>
      <hr className={styles.header__divider} />
    </div>
  );
};

export default Header;
