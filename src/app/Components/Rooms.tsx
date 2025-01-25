import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";


export default function Rooms() {
  return (
    <div>
      <section className="bg-[#FCF8F3] px-4 py-12 md:py-20 mt-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {/* text content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold font-poppinsSemiBold text-gray leading-tight md:text-4xl">
                50+ Beautiful rooms inspiration
              </h1>
              <p className="mt-4 text-gray-600 text-lg font-poppins">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <button className="mt-8 w-fit  bg-[#B8884B] text-white transition-colors px-8 py-3 font-poppins hover:bg-[#A67A43]">
                Explore More
              </button>
            </div>
            {/* middle image */}
            <div>
              <div className=" relative   w-full aspect-[3/4] verflow-hidden">
                <Image
                  src="/images/middle.png"
                  alt="bedroom image"
                  fill
                  priority
                  quality={100}
                  className="cover-object"
                />

                {/* room info */}
                <div className="absolute w-[217px] h-[130px] bottom-6 left-6 right-6 bg-white p-6 ">
                  <div className="flex items-center gap-4  font-poppins text-sm text-gray-600">
                    <span>01</span>
                    <span className="h-px bg-gray-300"></span>
                    <span>Bed room</span>
                  </div>
                  <div className="mt-2 flex items-center  ">
                    <h3 className="font-poppins text-2xl font-medium text-gray-900">
                      Inner Peace
                    </h3>
                    
                  </div>
                  <div className="px-48">
                  <button className=" bg-[#B8884B]  p-3  text-white transition-colors hover:bg-[#A67A43]">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/right.png"
                alt="Modern dining room"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>
            {/* Right Arrow Navigation */}
            <button className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
