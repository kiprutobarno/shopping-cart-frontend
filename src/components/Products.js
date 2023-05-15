import { popularProducts } from "../data/db";
import Product from "./Product";
import styles from "../styles/components/Products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
