import styles from "../styles/pages/Cart.module.css";
import Navbar from "../components/Navbar";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const { products, total } = cart;

  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Your Bag</h1>
        <div className={styles.top}>
          <button className={styles.topButton}>Continue Shopping</button>
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
                  <img src={product.img} className={styles.img} />
                  <div className={styles.details}>
                    <span>
                      <b>Product:</b> {product.title}
                    </span>
                    <span>
                      <b>ID:</b> {product._id}
                    </span>
                    <span className={styles.productColor}></span>
                    <span>
                      <b>{product.size}:</b> M
                    </span>
                  </div>
                </div>
                <div className={styles.priceDetails}>
                  <div className={styles.productAmountContainer}>
                    <Remove />
                    <div className={styles.productAmount}>
                      {product.quantity}
                    </div>
                    <Add />
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
