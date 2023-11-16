import Image from 'next/image';
import React from 'react';
import ChairmanPic from '../../assets/chairman.png'
const Chairman = () => {
  return (
    <div className='md:w-9/12 px-5 md:px-0 mx-auto grid md:grid-cols-2 gap-10 my-16 items-center'>
      <div>
        <Image sizes="(max-width: 768px) 100vw, 33vw" alt='' src={ChairmanPic} />
      </div>
      <div>
        <h2 className='text-[32px] font-[600] mb-5 '>Chairmen Welcome</h2>
        <p className='text-[#BFB7B9] leading-[28px]'>“Welcome to our website. I am honored to be the Chairmen of Mosharraf Hossain School & College. I have been entrusted
          with continuing the academic excellence of this School & College and enriching  the quality of  student life.”</p>
      </div>
    </div>
  );
};

export default Chairman;