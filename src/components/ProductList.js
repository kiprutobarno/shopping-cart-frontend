import { popularProducts } from "../data/db";
import Product from "./Product";
import styles from "../styles/components/ProductList.module.css";

const ProductList = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductList;
