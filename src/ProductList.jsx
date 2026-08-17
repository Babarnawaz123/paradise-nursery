import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";
import "./ProductList.css";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=600",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image:
            "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&q=80&w=600",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image:
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
          description: "Removes mold spores and purifies the air.",
          cost: "$18",
        },
        {
          name: "Boston Fern",
          image:
            "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=600",
          description: "Adds humidity and purifies air.",
          cost: "$20",
        },
        {
          name: "Rubber Plant",
          image:
            "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&q=80&w=600",
          description: "Cleans indoor air effectively.",
          cost: "$17",
        },
        {
          name: "Aloe Vera",
          image:
            "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=600",
          description: "Purifies air and offers medicinal benefits.",
          cost: "$14",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=600",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Jasmine",
          image:
            "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=600",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18",
        },
        {
          name: "Rosemary",
          image:
            "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=600",
          description: "Invigorating scent, often used in cooking.",
          cost: "$15",
        },
        {
          name: "Mint",
          image:
            "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80&w=600",
          description: "Refreshing aroma and versatile herb.",
          cost: "$12",
        },
        {
          name: "Lemon Balm",
          image:
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
          description: "Citrusy scent relieves stress.",
          cost: "$14",
        },
        {
          name: "Hyacinth",
          image:
            "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=600",
          description: "Beautiful flowering plant with powerful fragrance.",
          cost: "$22",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Echinacea",
          image:
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
          description: "Boosts immune system functionality.",
          cost: "$16",
        },
        {
          name: "Peppermint",
          image:
            "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=600",
          description: "Aids digestion and relieves headaches.",
          cost: "$13",
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  return (
    <div>
      <div className="navbar">
        <div
          className="nav-brand"
          onClick={onHomeClick}
          style={{ cursor: "pointer" }}
        >
          <h2>Paradise Nursery</h2>
          <p>Where Green Meets Serenity</p>
        </div>
        <div
          className="nav-title"
          onClick={() => setShowCart(false)}
          style={{ cursor: "pointer" }}
        >
          Plants
        </div>
        <div className="nav-cart" onClick={() => setShowCart(true)}>
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalQuantity}</span>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid-container">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h1 className="category-title">{categoryObj.category}</h1>
              <div className="plant-list">
                {categoryObj.plants.map((plant, pIndex) => (
                  <div key={pIndex} className="plant-card">
                    <span className="sale-badge">SALE</span>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-img"
                    />
                    <h3>{plant.name}</h3>
                    <p className="plant-price">{plant.cost}</p>
                    <p className="plant-desc">
                      <em>{plant.description}</em>
                    </p>
                    <button
                      className={`add-btn ${isPlantInCart(plant.name) ? "disabled" : ""}`}
                      disabled={isPlantInCart(plant.name)}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {isPlantInCart(plant.name)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
