import GridItem from "../gridItem/gridItem";
import Loading from "../loading/loading";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import styles from "./grid.module.css";

export default function Grid({ setSelectedProducts, selectedProducts }) {
  const { products, isLoading } = useFetchProducts();

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
            quantity: elt.quantity + 1,
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
          quantity: 1,
        })
      );
    }
  }

  return (
    <div data-testid="grid" className={styles.grid}>
      {isLoading ? (
        <Loading />
      ) : (
        products.map((item, i) => {
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
        })
      )}
    </div>
  );
}
