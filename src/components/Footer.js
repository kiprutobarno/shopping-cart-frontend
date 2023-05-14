import styles from "../styles/components/Footer.module.css";
import Facebook from "@mui/icons-material/FacebookOutlined";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Pinterest from "@mui/icons-material/Pinterest";
import Place from "@mui/icons-material/PlaceOutlined";
import Call from "@mui/icons-material/CallOutlined";
import Email from "@mui/icons-material/EmailOutlined";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Shoppify</h1>
        <p className={styles.desc}>
          Our APIs response status codes and error codes comply with HTTP status
          codes as defined in RFC 2616. You can invoke our API endpoints using
          REST clients like Postman or SoapUI and command line tools like Curl
          and Node.js.
        </p>
        <div className={styles.socialContainer}>
          <div className={`${styles.icon} ${styles.facebook}`}>
            <Facebook />
          </div>
          <div className={`${styles.icon} ${styles.instagram}`}>
            <Instagram />
          </div>
          <div className={`${styles.icon} ${styles.twitter}`}>
            <Twitter />
          </div>
          <div className={`${styles.icon} ${styles.pinterest}`}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3 className={styles.title}>Useful Links</h3>
        <ul className={styles.list}>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>Cart</li>
          <li className={styles.item}>My Account</li>
          <li className={styles.item}>Men Category</li>
          <li className={styles.item}>Women Category</li>
          <li className={styles.item}>Order Tracking</li>
          <li className={styles.item}>Wishlist Item</li>
          <li className={styles.item}>Terms & conditions</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>Contacts</h3>
        <div className={styles.contactItem}>
          <Place style={{ marginRight: 10 }} />
          Kenyatta Avenue, Nairobi, Kenya
        </div>
        <div className={styles.contactItem}>
          <Call style={{ marginRight: 10 }} />
          +254 (0) 708 344 488
        </div>
        <div className={styles.contactItem}>
          <Email style={{ marginRight: 10 }} />
          barxwells@gmail.com
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          className={styles.payment}
        />
      </div>
    </div>
  );
};

export default Footer;
