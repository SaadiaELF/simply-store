import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./basket.module.css";

export default function Basket() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faBasketShopping} size="xl" />
      <p className={styles.quantity}>0</p>
    </div>
  );
}
