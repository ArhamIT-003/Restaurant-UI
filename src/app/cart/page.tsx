import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="h-[calc(!00vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCT CONTAINER  */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEMS */}
        <div className="flex items-center justify-between mb-4 md:mt-[8rem] lg:mt-[0]">
          <Image
            src="/temporary/p1.png"
            alt=""
            className="object-contain"
            width={100}
            height={100}
          />

          <div>
            <h1 className="text-xl uppercase font-bold">title</h1>
            <span>large</span>
          </div>
          <div className="flex justify-center gap-8">
            <h2 className="cursor-pointer font-bold">$25</h2>
            <span>X</span>
          </div>
        </div>
        {/* SINGLE ITEMS */}
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/temporary/p1.png"
            alt=""
            className="object-contain"
            width={100}
            height={100}
          />

          <div>
            <h1 className="text-xl uppercase font-bold">title</h1>
            <span>large</span>
          </div>
          <div className="flex justify-center gap-8">
            <h2 className="cursor-pointer font-bold">$25</h2>
            <span>X</span>
          </div>
        </div>
        {/* SINGLE ITEMS */}
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/temporary/p1.png"
            alt=""
            className="object-contain"
            width={100}
            height={100}
          />

          <div>
            <h1 className="text-xl uppercase font-bold">title</h1>
            <span>large</span>
          </div>
          <div className="flex justify-center gap-8">
            <h2 className="cursor-pointer font-bold">$25</h2>
            <span>X</span>
          </div>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$330</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Charges</span>
          <span className=" text-green-500 uppercase">Free!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="uppercase">Total(INCL. VAT)</span>
          <span className="">$350</span>
        </div>
        <button className="bg-red-500 text-white rounded-md p-3 cursor-pointer uppercase ring-1 ring-red-500 w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
