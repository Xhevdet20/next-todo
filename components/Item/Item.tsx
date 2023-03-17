import styles from "./Item.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

interface Props {
  text: string;
  index: number;
}

const  Item: React.FC<Props> = ({text, index}) => {
  
  return (
    <div className={styles.item} key={`item-${index}`}>
          <FontAwesomeIcon   icon={faSquare} inverse  className={styles.item__icon}   />
          {/* <FontAwesomeIcon icon={faSquareCheck} inverse  /> */}
          <p>{text}</p>
    </div>
  );
} 


export default Item