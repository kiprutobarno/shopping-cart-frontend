import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/Product.module.css";
import { useLocation } from "react-router-dom";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, addToCart, STATE_RESET } from "../redux/actions";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  const handleColor = (col) => {
    setColor(col);
  };

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 0 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity, color, size }));
    // dispatch({ type: STATE_RESET });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src={product.img} className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.desc}</p>
          <span className={styles.price}>Ksh {product.price}</span>

          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Color</span>
              {product.color?.map((color) => (
                <div
                  className={styles.colorFilter}
                  style={{ backgroundColor: color }}
                  key={color}
                  onClick={() => handleColor(color)}
                ></div>
              ))}
            </div>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Size</span>
              <select
                className={styles.sizeFilter}
                defaultValue={size}
                onChange={handleSize}
              >
                {product.size?.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <Remove onClick={() => handleQuantity("decrease")} />
              <span className={styles.amount}>{quantity}</span>
              <Add onClick={() => handleQuantity("increase")} />
            </div>
            <button onClick={handleAddToCart} className={styles.button}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
