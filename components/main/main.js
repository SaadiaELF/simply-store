import styles from "./main.module.css";
import Header from "../header/header";
import Grid from "../grid/grid";

export default function Main({ setSelectedProducts, selectedProducts }) {
  return (
    <main data-testid="main" className={styles.wrapper}>
      <Header title="Available online" />
      <Grid
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </main>
  );
}
