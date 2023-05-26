import styles from "./product.module.css";
import formatNum from "../../utils/formatNum";

export default function product({ item }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.imageUrl} alt={item.title} />
      <div className={styles.wrapper}>
        <h4 className={styles.title}>{item.title}</h4>
        <h3 className={styles.description}>{formatNum(item.price)}</h3>
      </div>
      {/* <p className={styles.description}>{description}</p> */}
    </div>
  );
}
