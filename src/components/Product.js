import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles from "../styles/components/Product.module.css";
const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <img src={product.img} className={styles.img} />
      <div className={styles.info}>
        <div className={styles.icon}>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className={styles.icon}>
          <SearchOutlinedIcon />
        </div>
        <div className={styles.icon}>
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
