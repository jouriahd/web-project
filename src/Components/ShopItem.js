import { useState } from "react";
import "../styles/shop.css";

 const ShopItem=({product})=> {
  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity((count) => count + 1);
  const decrease = () => setQuantity((count) => Math.max(1, count - 1));
 
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">

          <span className="product-price">
            {product.price}
          </span>

          <div className="quantity-control">
            <button type="button" onClick={decrease} >-</button>

            <span>{quantity}</span>

            <button type="button" onClick={increase} >+</button>
          </div>

        </div>

        <button
          type="button"
          className="add-cart-btn"
        >
          Add to Cart
        </button>

      </div>
      </div>
  );
}

export default ShopItem;