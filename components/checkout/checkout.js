import Product from "../product/product";
import formatNum from "../../utils/formatNum";
import { useGetTotal } from "../../hooks/useGetTotal";
import styles from "./checkout.module.css";

export default function Checkout({ show, products, setProducts, setShow }) {
  const { total } = useGetTotal(products);

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
        <p data-testid="message" className={styles.text}>
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
      <p data-testid="total" className={styles.text}>
        Total : {formatNum(total)}
      </p>
      <button
        className={`${styles.button} btn-primary`}
        onClick={() => setShow(false)}
      >
        Continue Shopping
      </button>
    </div>
  );
}
