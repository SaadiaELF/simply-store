import styles from "./product.module.css";
import formatNum from "../../utils/formatNum";

export default function product({ item }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.imageUrl} alt={item.title} />
      <div className={styles.wrapper}>
        <h4 className={styles.title}>{item.title}</h4>
        <h4>Quantity: {item.quantity}</h4>
      </div>
      <h3 className={styles.text}>{formatNum(item.price)}</h3>
    </div>
  );
}
