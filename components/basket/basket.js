import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useGetQuantity } from "../../hooks/useGetQuantity";
import styles from "./basket.module.css";

export default function Basket({ selectedProducts, showBasket }) {
  const { count } = useGetQuantity(selectedProducts);

  return (
    <div
      className={styles.container}
      tabIndex="0"
      onClick={showBasket}
      onKeyUp={showBasket}
    >
      <FontAwesomeIcon
        className={styles.icon}
        icon={faBasketShopping}
        size="lg"
      />
      <p data-testid="count" className={styles.quantity}>
        {count}
      </p>
    </div>
  );
}
