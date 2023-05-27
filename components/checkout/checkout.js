import { useState, useEffect } from "react";
import Product from "../product/product";
import formatNum from "../../utils/formatNum";
import styles from "./checkout.module.css";

export default function Checkout({ show, products, setProducts }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total =
      products.length &&
      products.reduce((sum, item) => {
        return sum + item.price;
      }, 0);

    setTotal(total);
  }, [products]);

  function addProduct(item) {
    const product = products.map((elt) => {
      if (elt.title === item.title) {
        return {
          ...elt,
          price: elt.price + parseInt(item.price / elt.quantity),
          quantity: elt.quantity + 1,
        };
      }
      return elt;
    });
    setProducts(product);
  }
  function removeProduct(item) {
    const product = products.map((elt) => {
      if (elt.title === item.title && elt.quantity > 0) {
        return {
          ...elt,
          price: elt.price - parseInt(item.price / elt.quantity),
          quantity: elt.quantity - 1,
        };
      }
      return elt;
    });
    setProducts(product);
  }

  return (
    <div className={`${show ? styles.show : styles.hide} ${styles.container}`}>
      <h2 className={styles.title}>Shopping Basket</h2>
      {total === 0 ? (
        <p className={styles.text}>
          You don&apos;t have anything in your basket.
        </p>
      ) : (
        products
          .filter((item) => item.quantity > 0)
          .map((item, i) => {
            return (
              <Product
                key={i}
                item={item}
                addProduct={() => addProduct(item)}
                removeProduct={() => removeProduct(item)}
              />
            );
          })
      )}
      <p className={styles.text}>Total : {formatNum(total)}</p>
    </div>
  );
}
