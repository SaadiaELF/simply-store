import styles from "./product.module.css";
import formatNum from "../../utils/formatNum";

export default function product({ item }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.imageUrl} alt={item.title} />
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{item.title}</h3>
        <h2 className={styles.description}>{formatNum(item.price)}</h2>
      </div>
      {/* <p className={styles.description}>{description}</p> */}
    </div>
  );
}
