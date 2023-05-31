import styles from "../styles/pages/Cart.module.css";
import Navbar from "../components/Navbar";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../redux/actions";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const { products, total } = cart;

  const handleQuantity = (type, product) => {
    if (type === "decrease") {
      dispatch(decreaseQuantity(product));
    } else {
      dispatch(increaseQuantity(product));
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Your Bag</h1>
        <div className={styles.top}>
          <Link to="/products">
            <button className={styles.topButton}>Continue Shopping</button>
          </Link>
          <div>
            <span className={styles.topText}>Shopping Bag (2)</span>
            <span className={styles.topText}>Wishlist (0)</span>
          </div>
          <button className={`${styles.topButton} ${styles.filled}`}>
            Checkout Now
          </button>
        </div>
        <div className={styles.bottom}>
          {/* Info */}
          <div className={styles.info}>
            {products.map((product, index) => (
              <div className={styles.product} key={index}>
                <div className={styles.productDetails}>
                  <img src={product?.img} className={styles.img} />
                  <div className={styles.details}>
                    <span>
                      <b>Product:</b> {product.title}
                    </span>
                    <span>
                      <b>ID:</b> {product._id}
                    </span>
                    <span className={styles.colorSpan}>
                      <b>Color:</b>
                      <div
                        className={styles.productColor}
                        style={{ backgroundColor: product.color }}
                      />
                    </span>
                    <span>
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className={styles.priceDetails}>
                  <div className={styles.productAmountContainer}>
                    <Remove
                      onClick={() => handleQuantity("decrease", product)}
                    />
                    <span className={styles.productAmount}>
                      {product.quantity}
                    </span>
                    <Add onClick={() => handleQuantity("increase", product)} />
                  </div>
                  <div className={styles.productPrice}>
                    Ksh {product.quantity * product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Summary */}
          <div className={styles.summary}>
            <h1 className={styles.summaryTitle}>Order Summary</h1>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>{total}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Estimated Shipping Cost</span>
              <span>0.00</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Shipping Discount</span>
              <span>0.00</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.total}`}>
              <span>Total</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
