import styles from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToDo } from "@/utils/types";

interface Props {
  item: ToDo;
  index: number;
  toggle : any
  deleteItem: any
}

const Item: React.FC<Props> = ({ item, index, toggle, deleteItem }) => {

  return (
    <div className={styles.item} key={`item-${index}`}>
      <div onClick={() => toggle(item.id)}>
      <FontAwesomeIcon
        icon={faCheckSquare}
        inverse
        // swapOpacity 
        className={`${styles.item__icon} ${item.state ? styles.item__icon__success : null}`}
      />
      </div>
      <p>{item.text}</p>

    <div onClick={() => deleteItem(item.id)}>
    <FontAwesomeIcon
        icon={faTrash}
        inverse
        swapOpacity 
        className={`${styles.trash__icon}`}
      />
    </div>

    </div>
  );
};

export default Item;
