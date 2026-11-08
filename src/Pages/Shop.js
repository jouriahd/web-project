import HeroCard from "../Components/HeroCard.js";
import { useState } from "react";
import ShopItem from "../Components/ShopItem.js";
import "../styles/shop.css";
import flowerCup from "../images/flowercup.jpg";
import basicCup from "../images/basicCup.jpg";
import vintageCup from "../images/vintageCup.jpg";

const Shop = () => {
   const [count, setCount] = useState(0);
  

   const products = [
    {
      id: 1,
      name: "Flower cup",
      description: "A beautiful cup to start you day.",
      price: "$18",
      image: flowerCup,
    },
    {
      id: 2,
      name: "Basic Cup",
      description: "A simple cup for your daily coffee.",
      price: "$15",
      image: basicCup,
    },
    {
      id: 3,
      name: "Vintage Cup",
      description: "A cup with a touch of nostalgia.",
      price: "$22",
      image: vintageCup,
    },];

  return (
    <div>
    <HeroCard
      title="Our Shop"
      description="Browse our selection of unique items and magical merchandise."
    />
    <section className="shop-products">

        <div className="shop-section-title">
          <h2>Our Collection</h2>
          <p>Explore our carefully selected pieces.</p>
         
        </div>

        <div className="products-grid">

          {products.map((product) => (
            <ShopItem
              key={product.id}
              product={product}
            
            />
          ))}

        </div>

      </section>

    </div>
  );
};
export default Shop;