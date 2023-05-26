import styles from "./main.module.css";
import Header from "../header/header";
import Grid from "../grid/grid";

export default function Main() {
  return (
    <main className={styles.wrapper}>
      <Header text="Available online" />
      <Grid />
    </main>
  );
}
