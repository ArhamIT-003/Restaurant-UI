import React from "react";
import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row text-red-500">
      {pizzas.map((item) => (
        <Link
          key={item.id}
          className="w-full h-[60vh] p-4 border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3  flex flex-col justify-between group even:bg-fuchsia-50"
          href={`/product/${item.id}`}
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt="item-image"
                fill
                className="object-contain"
              />
            </div>
          )}

          <div className="flex justify-between items-center font-bold">
            <h1 className="text-xl uppercase p-2">{item.title}</h1>
            <p className="group-hover:hidden">{item.price}</p>
            <button className="hidden group-hover:block rounded-md p-2 uppercase bg-red-500 text-white">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
