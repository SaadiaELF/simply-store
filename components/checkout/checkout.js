import Product from "../product/product";
import formatNum from "../../utils/formatNum";
import styles from "./checkout.module.css";

export default function Checkout({ show, products }) {
  const total =
    products.length &&
    products.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
  return (
    <div className={`${show ? styles.show : styles.hide} ${styles.container}`}>
      <h2 className={styles.title}>Shopping Basket</h2>
      {total === 0 ? (
        <p className={styles.text}>
          You don&apos;t have anything in your basket.
        </p>
      ) : (
        products.map((item, i) => {
          return <Product key={i} item={item} />;
        })
      )}
      <p className={styles.text}>Total : {formatNum(total)}</p>
    </div>
  );
}
