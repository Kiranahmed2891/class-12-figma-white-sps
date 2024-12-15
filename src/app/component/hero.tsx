// 
import React from 'react';
import Image from 'next/image';
import arrow from '@/app/assets/arrow.png';
import img from '@/app/assets/Img.png';

const HeroSection = () => {
  return (
    <section className="bg-[#043873] w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-20">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Get More Done with Whitepace
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white max-w-lg mx-auto lg:mx-0">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
        </p>
        <button className="mt-10 flex items-center justify-center bg-[#4F9CF9] text-white px-6 py-3 rounded-lg border border-white hover:bg-blue-600 transition duration-300 mx-auto lg:mx-0">
          Try Whitepace Free
          <Image src={arrow} width={16} height={16} alt="arrow" className="ml-2" />
        </button>
      </div>

      {/* Image Content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <Image
          src={img}
          width={824}
          height={549}
          alt="Hero Image"
          className="w-full h-auto max-w-md md:max-w-lg lg:max-w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
