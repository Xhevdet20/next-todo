import { Dispatch, SetStateAction } from "react";
import List from "../List";
import { ToDo } from '@/utils/types';
import styles from "./Body.module.scss";

interface Props {
  list: ToDo[];
  setList: Dispatch<SetStateAction<ToDo[]>>;
}

 const Body: React.FC<Props> = ({ list, setList }) => {
  return (
    <div className={styles.body}>
      < List list={list}  setList={setList}  />
    </div>
  );
}

export default Body