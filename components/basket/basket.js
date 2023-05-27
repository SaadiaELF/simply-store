import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useGetTotal } from "../../hooks/useGetTotal";
import styles from "./basket.module.css";

export default function Basket({ selectedProducts, showBasket }) {
  const { count } = useGetTotal(selectedProducts);

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faBasketShopping} size="xl" onClick={showBasket} />
      <p className={styles.quantity}>{count}</p>
    </div>
  );
}
