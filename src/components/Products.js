import Product from "./Product";
import styles from "../styles/components/Products.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions";

const Products = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      {products?.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Products;
