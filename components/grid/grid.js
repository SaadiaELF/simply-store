import { useState, useEffect } from "react";
import styles from "./grid.module.css";

export default function Grid() {
  const [products, setProducts] = useState([]);
  async function getAllProducts() {
    const request = await fetch(
      "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
    );
    const response = await request.json();
    const productsData = response.data.products.edges;
    setProducts(productsData);
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className={styles.grid}>
      {products.map((item, i) => {
        return <div key={i}>{item.node.title}</div>;
      })}
    </div>
  );
}
