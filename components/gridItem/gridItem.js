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
    <article data-testid="item" className={styles.container}>
      <div className={styles.imgWrapper}>
        <img
          data-testid="item-img"
          className={styles.img}
          src={imageUrl}
          alt={title}
          onTouchStart={() => setShow(true)}
          onTouchEnd={() => setShow(false)}
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        />
        <p
          data-testid="item-description"
          className={`${show ? styles.show : styles.hide} ${
            styles.description
          }`}
        >
          {description}
        </p>
      </div>
      <h2 data-testid="item-title" className={styles.title}>
        {title}
      </h2>
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>{formatNum(price)}</h3>
        <button
          data-testid="item-btn"
          className="btn-primary"
          onClick={onClick}
        >
          Add to Basket
        </button>
      </div>
    </article>
  );
}
