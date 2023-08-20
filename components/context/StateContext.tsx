'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'ract-hot-toast';

export const Context = createContext({});

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(0);

  const incrementItem = () => {
    setTotalQuantities((prev) => {
      return (prev = prev + 1);
    });
    setQty((prev) => {
      return (prev = prev + 1);
    });
  };

  const decrementItem = () => {
    setTotalQuantities((prev) => {
      if (prev > 1) {
        return (prev = prev - 1);
      } else {
        return (prev = 0);
      }
    });
    setQty((prev) => {
      if (prev > 1) {
        return (prev = prev - 1);
      } else {
        return (prev = 0);
      }
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incrementItem,
        decrementItem,
      }}>
      {children}
    </Context.Provider>
  );
};
