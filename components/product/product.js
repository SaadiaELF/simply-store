import styles from "./product.module.css";
import formatNum from "../../utils/formatNum";

export default function product({ item, addProduct, removeProduct }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.imageUrl} alt={item.title} />
      <div className={styles.wrapper}>
        <h4 className={styles.title}>{item.title}</h4>
        <div className={styles.btns}>
          <button className="btn-primary" onClick={removeProduct}>
            -
          </button>
          <span className={styles.num}>{item.quantity}</span>
          <button className="btn-primary" onClick={addProduct}>
            +
          </button>
        </div>
      </div>
      <h3 className={styles.text}>{formatNum(item.price)}</h3>
    </div>
  );
}
