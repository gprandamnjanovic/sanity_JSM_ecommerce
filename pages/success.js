import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsFillBagCheckFill />
        </p>
        <h2>Thank You For Your Order!</h2>
        <p className='email-msg'>Check your emal inbox for the receipt.</p>
        <p className='description'>
          If you have any questions , please email{' '}
          <a href='mailto:orders@example.com' className='email'>
            orders@example.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
