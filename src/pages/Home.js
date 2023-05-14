import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
    </div>
  );
};

export default Home;
