import styles from "./product.module.css";
import formatNum from "../../utils/formatNum";

export default function product({ item }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.imageUrl} alt={item.title} />
      <div className={styles.wrapper}>
        <h4 className={styles.title}>{item.title}</h4>
        <div className={styles.btns}>
          <button>-</button>
          <h4>{item.quantity}</h4>
          <button>+</button>
        </div>
      </div>
      <h3 className={styles.text}>{formatNum(item.price)}</h3>
    </div>
  );
}
