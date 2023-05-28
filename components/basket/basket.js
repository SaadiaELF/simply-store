import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useGetQuantity } from "../../hooks/useGetQuantity";
import styles from "./basket.module.css";

export default function Basket({ selectedProducts, showBasket }) {
  const { count } = useGetQuantity(selectedProducts);
  console.log(selectedProducts);
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faBasketShopping} size="lg" onClick={showBasket} />
      <p data-testid="count" className={styles.quantity}>
        {count}
      </p>
    </div>
  );
}
