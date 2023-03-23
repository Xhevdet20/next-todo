import { ToDo } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";
import Item from "../Item";
import styles from "./ListComponent.module.scss";

interface Props {
  list: ToDo[];
  setList: Dispatch<SetStateAction<ToDo[]>>;
}

const ListComponent: React.FC<Props> = ({ list, setList }) => {
  // console.log(list)

  const toggle = (id: string)  =>{
    if (id != "") {
      let element = list.find(x => x.id === id);
      const newArray = list.map((item, i) => {
        if (item.id === id && element ) {
          return { text: element.text, state: !element.state, id: element.id };
        } else {
          return item;
        }
      });
      setList(newArray)
    }
    return;
  }

  const deleteItem = (id: string) => {
    if (id != "") {
      const result = list.filter(element => element.id !== id);
      setList(result)
    }
  }

  return (
    <div className={styles.list}>
      {list?.length !== 0 && list.map((element, index) => {
        return <div key={index}><Item item={element} index={index} toggle={toggle} deleteItem={deleteItem} /></div>;
      })}
    </div>
  );
};

export default ListComponent;
