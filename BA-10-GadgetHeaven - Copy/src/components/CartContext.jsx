import React, { createContext, useState, useContext } from "react";

// Create the CartContext
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  console.log(children);
  
  // State to store the cart items
  const [cart, setCart] = useState([]);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Return the Provider with the context value
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
