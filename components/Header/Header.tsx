import { ToDo } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Header.module.scss";
import { v4 as uuid } from 'uuid';

interface Props {
  list: ToDo[];
  setList: Dispatch<SetStateAction<ToDo[]>>;
}

const Header: React.FC<Props> = ({ list, setList }) => {
  const [text, setText] = useState<string>("");

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      addItemToList()
    }
  }

  const addItemToList = () => {
    if (text != "") {
      const unique_id = uuid();
      const small_id = unique_id.slice(0,8)
      setList([...list, {
        text,
        state: false,
        id : small_id
      }]);
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
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" onClick={addItemToList}>
          +
        </button>
      </div>
      <hr className={styles.header__divider} />
    </div>
  );
};

export default Header;
