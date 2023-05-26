import styles from "./checkout.module.css";

export default function Checkout({ show }) {
  return <div className={`${show ? styles.show : styles.hide}`}>test</div>;
}
