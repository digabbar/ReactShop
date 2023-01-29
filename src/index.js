import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartProvider from "./store/CartProvider";
import MealsProvider from "./store/MealsProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MealsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </MealsProvider>
);
