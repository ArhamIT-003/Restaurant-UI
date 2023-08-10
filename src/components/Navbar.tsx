import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import AuthLinks from "./AuthLinks";

const Navbar = () => {
  return (
    <>
      <div className="h-12 text-red-500 flex items-center justify-between border-b-2 border-b-red-500 uppercase p-4 md:h-24 lg:px-20 xl:px-40">
        {/* LEFT LINKS */}
        <div className="hidden md:flex gap-4">
          <Link href="/">Home Page</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
        </div>
        {/* LOGO */}
        <div className="text-xl md:font-bold">Massimo</div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu />
        </div>
        {/* RIGHT LINKS */}
        <div className="hidden md:flex gap-4 justify-center items-center">
          <div className="flex items-center justify-center bg-orange-300 gap-2 cursor-pointer px-1 rounded-md">
            <Image src="/phone.png" alt="phone-img" width={20} height={20} />
            <span>1234 765 89</span>
          </div>
          <AuthLinks />
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
