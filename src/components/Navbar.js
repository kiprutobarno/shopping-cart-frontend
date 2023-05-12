import styles from "../styles/Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>English</span>
          <div className={styles.searchContainer}>
            <input type="text" />
            <div className={styles.searchIcon}>
              <SearchIcon style={{ fontSize: 16, color: "gray" }} />
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <h1 className={styles.logo}>Shoppify.</h1>
        </div>

        <div className={styles.right}>
          <div className={styles.menuItem}>Register</div>
          <div className={styles.menuItem}>Login</div>
          <div className={styles.menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;