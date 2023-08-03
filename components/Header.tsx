"use client";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
   return (
      <div className="navbar-container">
         <p className="logo">
            <Link href="/">JSM Headphones</Link>
         </p>
         <button type="button" className="cart-icon" onClick={() => {}}>
            <AiOutlineShopping />
            <span className="cart-item-qty">1</span>
         </button>
      </div>
   );
};

export default Header;
