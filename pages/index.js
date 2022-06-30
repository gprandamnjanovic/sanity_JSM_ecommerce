import React from 'react';
import { client } from '../lib/client';
import { FooterBanner, HeroBanner, Product } from '../components';
import Company from '../components/Company';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      {/* <div className='logos'>
        <div className='products-heading'>
          <h2>We Sell Quality</h2>
          <Company />
        </div>
      </div> */}
      <div className='products-heading'>
        <h2>Best Seling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footeBanner={bannerData && bannerData[0]} />
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
