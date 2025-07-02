import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const Card = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const cartSet = (e) => {
    e.preventDefault();
    setCart([...cart, product]);
  };

  return (
    <div
      className="card h-100 shadow-sm border-0"
      style={{
        width: "18rem",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        margin: "10px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={product.url}
        alt="Product"
        className="card-img-top"
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary mt-auto" onClick={cartSet}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
