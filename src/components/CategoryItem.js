import styles from "../styles/CategoryItem.module.css";

import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.img} className={styles.img} />
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <button className={styles.button}>Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
