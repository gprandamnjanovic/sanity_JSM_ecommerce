import React from 'react';
import data from '../public/data';
import Image from 'next/image';
const Company = () => {
  return (
    <div className='maylike-products-container track'>
      {data.map((item) => {
        console.log(item);
        const { img, id } = item;
        return <Image src={img} alt='' key={id} width={150} height={150} />;
      })}
    </div>
  );
};

export default Company;
