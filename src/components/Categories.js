import styles from "../styles/components/Categories.module.css";
import { categories } from "../data/db";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
