"use client"; 
import React from "react";
import Link from "next/link";
import { productdata } from "../Data/Productdata";
import Product from "../Products/Product";

const Heroproducts: React.FC = () => {
  const selectedProducts = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const filteredProducts = productdata.filter((product) =>
    selectedProducts.includes(product.id)
  );

  return (
    <>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-[#3A3A3A] text-3xl md:text-4xl font-bold mb-4">
          Our Products
        </h2>
      </div>
      <div className="px-4 md:px-16 lg:px-60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
            price={product.price}
            description={product.description}
            isNew={product.isNew}
            badge={product.badge}
            badgeColor={product.badgeColor} // Pass badgeColor prop
            discountPrice={product.discountPrice}
          />
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
        <Link href="#">
          <button className="w-[245px] h-[48px] hover:bg-[#B88E2F] border hover:text-white border-[#B88E2F] text-[#B88E2F] flex items-center justify-center">
            Show More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Heroproducts;
