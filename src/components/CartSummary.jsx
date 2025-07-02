import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartSummary = () => {
  const { cart } = useContext(CartContext);

  return (
    <div
      className="card text-white mb-3"
      style={{
        backgroundColor: "#3674B5", // Blue background
        maxWidth: "18rem",
        height: "100%",
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div className="card-header fs-5 fw-bold">Cart Summary</div>
      <div
        className="card-body"
        style={{
          overflowY: "auto",
          maxHeight: "300px",
          paddingTop: "0.5rem"
        }}
      >
        {cart.map((cart) => (
          <div key={cart.name} className="mb-3 border-bottom pb-2">
            <h5 className="card-title mb-1">{cart.name}</h5>
            <p className="card-text mb-0">{cart.price}</p>
          </div>
        ))}
        <button
          className="btn btn-outline-light mt-3 w-100"
          onClick={"#"}
          style={{ transition: "all 0.3s ease" }}
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
};
