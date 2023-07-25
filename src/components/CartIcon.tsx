"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <>
      <Link href="/cart">
        <div className="flex items-center gap-4">
          <div className=" relative w-8 h-8 md:w-5 md:h-5">
            <Image src="/cart.png" alt="cart-icon" width={32} height={32} />
          </div>
          <span>Cart (3)</span>
        </div>
      </Link>
    </>
  );
};

export default CartIcon;
