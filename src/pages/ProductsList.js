import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import styles from "../styles/pages/ProductsList.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductsList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[1];

  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  return (
    <div>
      <Navbar />
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <span className={styles.filterText}>Filter Products</span>
          <select
            name="color"
            className={styles.select}
            onChange={handleFilters}
          >
            <option disabled>Color</option>
            <option>White</option>
            <option>Red</option>
            <option>Orange</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Black</option>
          </select>
          <select
            name="size"
            className={styles.select}
            onChange={handleFilters}
          >
            <option disabled>Size</option>
            <option>XXL</option>
            <option>XL</option>
            <option>L</option>
            <option>M</option>
            <option>S</option>
          </select>
        </div>
        <div className={styles.filter}>
          <span className={styles.filterText}>Sort Products</span>
          <select className={styles.select} onChange={handleSort}>
            <option value="newest">Newest</option>
            <option value="asc">Price (Asc)</option>
            <option value="desc">Price (Desc)</option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default ProductsList;
