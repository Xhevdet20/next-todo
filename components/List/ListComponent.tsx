import { Dispatch, SetStateAction } from "react";
import Item from "../Item";
import styles from "./ListComponent.module.scss";

interface Props {
  list: string[];
  setList: Dispatch<SetStateAction<string[]>>;
}

const ListComponent: React.FC<Props> = ({ list, setList }) => {
  return (
    <div className={styles.list}>
      {list.map((element, index) => {
        return <div key={index}><Item text={element} index={index} /></div>;
      })}
    </div>
  );
};

export default ListComponent;
