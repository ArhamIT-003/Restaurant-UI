import React from "react";
import { menu } from "@/data";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.id}`}
          key={item.id}
          className="w-full h-1/3 ${getBackgroundClass(item.color)} bg-cover p-4 md:h-1/2"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className={`text-${item.color} w-1/2`}>
            <h1 className="uppercase font-bold text-2xl">{item.title}</h1>
            <p className="text-sm my-4">{item.desc}</p>
            <button
              className={`hidden 2xl:block text-${
                item.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
              style={{ backgroundColor: item.color }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
