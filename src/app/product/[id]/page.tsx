"use client";

import Image from "next/image";
import React from "react";
import { singleProduct } from "@/data";
import Price from "@/components/Price";

const Product = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:w-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}

      {/* TEXT CONTAINER */}
      <div className="flex  flex-col gap-4 justify-between md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          id={singleProduct.id}
          options={singleProduct.options}
          price={singleProduct.price}
        />
      </div>
    </div>
  );
};

export default Product;
