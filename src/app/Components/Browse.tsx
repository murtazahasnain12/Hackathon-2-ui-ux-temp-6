"use client";
import React from "react";
import Image from "next/image";

const Browse = () => {
  return (
    <>
      <div className="text-center mt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Browse The Range
        </h1>
        <p className="text-gray-600 mt-4 text-base md:text-xl lg:text-1xl max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="subText "></div>

      <div className="imgArea flex flex-col  justify-center sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-4">
        <div>
          <Image
            src="/images/dining.png"
            alt="Modern dining"
            width={450}
            height={480}
            quality={100}
            className="w-full sm:w-64 md:w-80 lg:w-96"
          />

          <h6 className="flex justify-center p-6 font-bold text-[#333333] text-xl">
            Dining
          </h6>
        </div>

        <div>
          <Image
            src="/images/living.png"
            alt="Modern living"
            width={450}
            height={480}
            quality={100}
            className="w-full sm:w-64 md:w-80 lg:w-96"
          />

          <h6 className="flex justify-center p-6 font-bold text-[#333333] text-xl">
            Living
          </h6>
        </div>

        <div>
          <Image
            src="/images/bedroom.png"
            alt="Modern bedroom"
            width={450}
            height={480}
            quality={100}
            className="w-full sm:w-64 md:w-80 lg:w-96"
          />

          <h6 className="flex justify-center p-6 font-bold text-[#333333] text-xl">
            Bedroom
          </h6>
        </div>
      </div>
    </>
  );
};

export default Browse;

{
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-12 px-4">
  <div className="flex flex-col items-center">
    <Image
      src="/images/dining.png"
      alt="Modern dining"
      width={450}
      height={480}
      quality={100}
    />
    <h6 className="flex justify-center p-6 font-bold text-[#333333] text-xl">
      Dining
    </h6>
  </div>

  <div className="flex flex-col items-center  ">
    <Image
      src="/images/living.png"
      alt="Modern living"
      width={450}
      height={480}
      quality={100}
    />
    <h6 className="flex justify-center p-6 font-bold text-[#333333] text-xl">
      Living
    </h6>
  </div>

  <div className="flex flex-col items-center">
    <Image
      src="/images/bedroom.png"
      alt="Modern bedroom"
      width={450}
      height={480}
      quality={100}
    />
    <h6 className="flex justify-center p-6 font-semibold text-[#333333] text-xl">
      Bedroom
    </h6>
  </div>
</div> 
}
