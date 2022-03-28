import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [savedProducts, setSavedProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const isAlreadyInCart = (prod) => {
    return cart.some((obj) => obj.id === prod.id);
  };

  const addToCart = (prod) => {
    setCart((prevState) => [...prevState, { ...prod, quantity: 1 }]);
  };

  const removeFromCart = (prod) => {
    setCart((prevState) => prevState.filter((obj) => obj.id !== prod.id));
  };

  const increaseQunatity = (prod) => {
    setCart((prevState) =>
      prevState.map((obj) => {
        if (obj.id === prod.id) {
          return { ...obj, quantity: obj.quantity + 1 };
        }
        return obj;
      })
    );
  };

  const decreaseQuantity = (prod) => {
    setCart((prevState) =>
      prevState.map((obj) => {
        if (obj.id === prod.id) {
          return { ...obj, quantity: obj.quantity - 1 };
        }
        return obj;
      })
    );
  };

  const saveForLater = (product) => {
    setSavedProducts((prevState) => [...prevState, product]);
    setCart((prevState) => prevState.filter((obj) => obj.id !== product.id));
  };

  const removeFromSaved = (product) => {
    setSavedProducts((prevState) =>
      prevState.filter((obj) => obj.id !== product.id)
    );
  };

  const movefromSavedToCart = (product) => {
    setSavedProducts((prevState) =>
      prevState.filter((obj) => obj.id !== product.id)
    );
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQunatity,
        decreaseQuantity,
        saveForLater,
        removeFromSaved,
        isAlreadyInCart,
        savedProducts,
        movefromSavedToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
