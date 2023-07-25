import Image from "next/image";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always cripsy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col h-[calc(100vh-6rem)] md:[calc(100vh-9rem)] lg:flex-row">
        <div className=" flex flex-1 flex-col gap-8 justify-center items-center text-red-500 font-bold pb-4">
          <h1 className="text-3xl md:text-6xl lg:text-7xl text-center uppercase p-4 ">
            {data[currentSlide].title}
          </h1>
          <button className="bg-red-500 text-white px-8 py-4">Order Now</button>
        </div>
        <div className="flex-1 relative">
          <Image
            src={data[currentSlide].image}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
