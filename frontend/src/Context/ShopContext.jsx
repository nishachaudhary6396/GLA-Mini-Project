import { response } from 'express';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('http://localhost:3000/allproduct')
    .then((response) => response.json())
    .then((data) => setAll_Product(data))

    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:3000/getcart', {
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token' : `${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:"",
      })
      .then((response) => response.json())
      .then((data) => setCartItems(data));
    }
  },[])
  
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:3000/removefromcart', {
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token' : `${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId})
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
