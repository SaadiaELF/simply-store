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
    <div className={`${show ? styles.show : styles.hide}`}>
      {products.map((item, i) => {
        return <Product key={i} item={item} />;
      })}
      <p>Total : {formatNum(total)}</p>
    </div>
  );
}
