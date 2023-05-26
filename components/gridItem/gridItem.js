import styles from "./gridItem.module.css";
import formatNum from "../../utils/formatNum";

export default function GridItem({
  imageUrl,
  title,
  description,
  price,
  onClick,
}) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imageUrl} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.wrapper}>
        <h2 className={styles.description}>{formatNum(price)}</h2>
        <button onClick={onClick}>Add to Basket</button>
      </div>
      {/* <p className={styles.description}>{description}</p> */}
    </div>
  );
}
