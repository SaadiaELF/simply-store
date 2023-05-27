import { useState } from "react";
import styles from "./gridItem.module.css";
import formatNum from "../../utils/formatNum";

export default function GridItem({
  imageUrl,
  title,
  description,
  price,
  onClick,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={imageUrl}
          alt={title}
          onTouchStart={() => setShow(true)}
          onTouchEnd={() => setShow(false)}
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        />
        <p
          className={`${show ? styles.show : styles.hide} ${
            styles.description
          }`}
        >
          {description}
        </p>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>{formatNum(price)}</h3>
        <button className="btn-primary" onClick={onClick}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}
