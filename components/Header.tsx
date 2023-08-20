'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Context } from './context/StateContext';
import { AppContextType } from 'next/dist/shared/lib/utils';

const Header = () => {
  const context = useContext(Context) as any;

  console.log(context.totalQuantities);

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => {}}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{context.totalQuantities}</span>
      </button>
    </div>
  );
};

export default Header;
