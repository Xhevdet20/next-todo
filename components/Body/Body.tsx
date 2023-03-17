import { Dispatch, SetStateAction } from "react";
import List from "../List";
import styles from "./Body.module.scss";

interface Props {
  list: string[];
  setList: Dispatch<SetStateAction<string[]>>;
}

 const Body: React.FC<Props> = ({ list, setList }) => {
  return (
    <div className={styles.body}>
      < List list={list}  setList={setList}  />
    </div>
  );
}

export default Body