import styles from "./header.module.css";

export default function Header({ text }) {
  return <h1 className={styles.title}>{text}</h1>;
}
