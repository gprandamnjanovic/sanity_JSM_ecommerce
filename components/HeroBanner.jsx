import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';
const HeroBanner = ({ heroBanner }) => {
  const { smallText, midText, buttonText, desc, product, image } = heroBanner;
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{smallText}</p>
        <h3>{midText}</h3>
        <img
          src={urlFor(image)}
          alt='headphones'
          className='hero-banner-image'
        />
        <div>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
