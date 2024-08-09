import "./App.css";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import Home from "./page/home/Home.jsx"
import Product from "./page/product/Product.jsx"
import Feature from "./page/feature/Feature.jsx"
import ProjectFeature from "./page/product-peature/ProductFeature.jsx"
import Plan from "./page/plan/Plan.jsx"
import Testimonial from "./page/testimonial/Testimonial.jsx"
import Banner from "./page/banner/Banner.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Product />
        <Feature />
        <ProjectFeature />
        <Plan />
        <Testimonial />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
