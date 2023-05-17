import styles from "../styles/pages/Cart.module.css";
import Navbar from "../components/Navbar";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => {
    console.log(state);
    state.cart;
  });

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
          <div className={styles.info}>
            <div className={styles.product}>
              <div className={styles.productDetails}>
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  className={styles.img}
                />
                <div className={styles.details}>
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <span className={styles.productColor}></span>
                  <span>
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className={styles.priceDetails}>
                <div className={styles.productAmountContainer}>
                  <Remove />
                  <div className={styles.productAmount}>1</div>
                  <Add />
                </div>
                <div className={styles.productPrice}>Ksh 2000</div>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <h1 className={styles.summaryTitle}>Order Summary</h1>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>2000.00</span>
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
              <span>2000.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
