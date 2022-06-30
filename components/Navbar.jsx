import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
const Navbar = () => {
  const { qty, showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>JSM Headphones</Link>
      </p>
      <button
        type='button'
        className='cart-icon'
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShoppingCart />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
