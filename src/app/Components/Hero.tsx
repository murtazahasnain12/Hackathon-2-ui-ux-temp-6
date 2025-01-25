import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] ">
      <div className="">
        <Image
          src="/images/hero.png"
          alt="Modern furniture showcase"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative top-8 sm:top-24 md:top-32 lg:top-28 p-6 sm:p-8 md:p-12 lg:p-16 w-[90%] max-w-[600px] h-auto mx-auto lg:ml-[800px] bg-[#FFF3E3]">
        <div>
          <span className="text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg tracking-widest mb-4 block font-semibold">
            New Arrival
          </span>
          <h1 className="text-[#b88e2f] text-4xl lg:text-5xl xl:text-6xl mb-6 font-semibold ">
            Discover Our
            <br />
            New Collection
          </h1>
          <p className="text-gray-700 text-base lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            expedita eos nesciunt,{" "}
          </p>

          <div>
            <Link
              href="/shop"
              className="inline-block bg-[#B88A44] font-bold text-white px-12 py-4 mt-4 text-sm lg:text-base  hover:bg-[#A67934] transition-colors duration-300 "
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
