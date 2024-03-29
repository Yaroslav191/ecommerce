'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Context } from './context/StateContext';
import { AppContextType } from 'next/dist/shared/lib/utils';
import Cart from './Cart';
import { useStateContext } from './context/StateContext';

const Header = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Header;
