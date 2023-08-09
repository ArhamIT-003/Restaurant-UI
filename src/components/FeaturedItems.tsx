import Image from "next/image";
import React from "react";
import { featuredProducts } from "@/data";

const Featureditems = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((items) => (
          <div
            key={items.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {items.img && (
              <div className="flex-1 w-full relative hover:rotate-[60deg] duration-300">
                <Image src={items.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-xl font-bold text-red-500 uppercase xl:text-2xl 2xl:text-3xl">
                {items.title}
              </h1>
              <p className="p-4 2xl:p-8">{items.desc}</p>
              <span className="text-xl font-bold">${items.price}</span>
              <button className="bg-red-500 text-white rounded-md p-2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featureditems;
