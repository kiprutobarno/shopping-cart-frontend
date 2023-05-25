import { Link } from "react-router-dom";
import styles from "../styles/components/CategoryItem.module.css";

import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <Link to={`products/${item.category}`}>
        <img src={item.img} className={styles.img} />
        <div className={styles.info}>
          <h1 className={styles.title}>{item.title}</h1>
          <button className={styles.button}>Shop Now</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
