import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles from "../styles/components/Product.module.css";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <img src={product.img} className={styles.img} />
      <div className={styles.info}>
        <div className={styles.icon}>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className={styles.icon}>
          <Link to={`/product/${product._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </div>
        <div className={styles.icon}>
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
