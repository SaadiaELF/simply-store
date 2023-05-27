import { useState, useEffect } from "react";
import GridItem from "../gridItem/gridItem";
import styles from "./grid.module.css";

export default function Grid({ setSelectedProducts, selectedProducts }) {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const request = await fetch(
      "https://mock.shop/api?query={products(first:%2030){edges%20{node%20{id%20title%20description%20featuredImage%20{url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
    );
    const response = await request.json();
    const productsData = response.data.products.edges;
    setProducts(productsData);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  function AddProduct(item) {
    const titles = selectedProducts.map((product) => product.title);
    if (titles.includes(item.node.title)) {
      const product = selectedProducts.map((elt) => {
        if (elt.title === item.node.title) {
          return {
            ...elt,
            price:
              elt.price +
              parseInt(item.node.variants.edges[0].node.price.amount),
            count: elt.count + 1,
          };
        }
        return elt;
      });
      setSelectedProducts(product);
    } else {
      setSelectedProducts(
        selectedProducts.concat({
          title: item.node.title,
          imageUrl: item.node.featuredImage.url,
          price: parseInt(item.node.variants.edges[0].node.price.amount),
          count: 1,
        })
      );
    }
  }

  return (
    <div className={styles.grid}>
      {products.map((item, i) => {
        return (
          <GridItem
            title={item.node.title}
            imageUrl={item.node.featuredImage.url}
            description={item.node.description}
            price={item.node.variants.edges[0].node.price.amount}
            key={i}
            onClick={() => AddProduct(item)}
          ></GridItem>
        );
      })}
    </div>
  );
}
