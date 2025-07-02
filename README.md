# 🛒 Context API Cart

A simple and elegant shopping cart built with **React** and **Context API** to manage global state, designed with Bootstrap styling.

🌐 **Live Demo:**  
👉 [mahnoorshabbir-contextapi-cart.vercel.app](https://mahnoorshabbir-contextapi-cart.vercel.app/)

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── Cart.jsx              # Displays cart items and total
│   ├── CartSummary.jsx       # Summary card with total price
│   ├── Card.jsx              # Product card with Add to Cart button
│   └── PageSetup.jsx         # Layout containing all cards
│
├── context/
│   └── CartContext.jsx       # Context provider and reducer logic
│
├── App.jsx                   # Root component with layout
├── index.jsx                 # App entry point
└── styles/
    └── index.css             # Optional custom styles
```

---

## 🧠 How It Works

- `CartContext.jsx` uses **React Context** to provide global cart state and actions like `addToCart`, `removeFromCart`, and `calculateTotal`.
- `Card.jsx` displays each product and allows users to add items to the cart.
- `Cart.jsx` lists all cart items with quantity and price.
- `CartSummary.jsx` shows the total price and number of items.
- `PageSetup.jsx` contains the product layout.

---

## 🚀 Features

- Add/remove products to/from cart  
- Quantity updates and total calculation  
- Global state managed with Context API  
- Clean UI with Bootstrap grid and cards  

---

## 🛠 Tech Stack

- React  
- Context API  
- Vite  
- Bootstrap 5  

---


