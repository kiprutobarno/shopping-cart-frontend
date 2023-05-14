import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
