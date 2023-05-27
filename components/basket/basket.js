import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./basket.module.css";

export default function Basket({ selectedProducts, showBasket }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const total =
      selectedProducts.length &&
      selectedProducts.reduce((sum, item) => {
        return sum + item.quantity;
      }, 0);
    setCount(total);
  }, [selectedProducts]);

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faBasketShopping} size="xl" onClick={showBasket} />
      <p className={styles.quantity}>{count}</p>
    </div>
  );
}
