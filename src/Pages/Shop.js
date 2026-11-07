import HeroCard from "../Components/HeroCard.js";
import { useState } from "react";
import ShopItem from "../Components/ShopItem.js";
import "../styles/shop.css";

const Shop = () => {
   const [count, setCount] = useState(0);
   const addToCart = (product, quantity) => {
    setCount((currentCount) => currentCount + quantity);
   };
  
   const products = [
    {
      id: 1,
      name: "Flower cup",
      description: "A beautiful cup to start you day.",
      price: "$18",
      image: "/images/flowercup.jpg",
    },
    {
      id: 2,
      name: "Basic Cup",
      description: "A simple cup for your daily coffee.",
      price: "$15",
      image: "/images/basicCup.jpg",
    },
    {
      id: 3,
      name: "Vintage Cup",
      description: "A cup with a touch of nostalgia.",
      price: "$22",
      image: "/images/vintageCup.jpg",
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
          <p role="status">Cart: {count} {count === 1 ? "item" : "items"}</p>
        </div>

        <div className="products-grid">

          {products.map((product) => (
            <ShopItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}

        </div>

      </section>

    </div>
  );
};
export default Shop;