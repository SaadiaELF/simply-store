import Product from "../product/product";
import formatNum from "../../utils/formatNum";
import { useGetTotal } from "../../hooks/useGetTotal";
import styles from "./checkout.module.css";

export default function Checkout({ show, products, setProducts }) {
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
