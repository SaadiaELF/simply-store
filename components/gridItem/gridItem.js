import Image from "next/image";
import styles from "./gridItem.module.css";

export default function GridItem({ imageUrl, title, description, price }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imageUrl} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        <h3 className={styles.description}>{"£" + price}</h3>
        <button>Add to Basket</button>
      </div>
      {/* <p className={styles.description}>{description}</p> */}
    </div>
  );
}
