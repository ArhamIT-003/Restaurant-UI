"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";

const links = [
  { id: 1, title: "Home Page", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "contact", url: "/" },
];

const Menu = () => {
  const [user, setUser] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        {!open ? (
          <Image
            src="/open.png"
            alt="Menu-button"
            width={20}
            height={20}
            onClick={() => {
              setOpen(true);
            }}
          />
        ) : (
          <Image
            src="/close.png"
            alt="Menu-button"
            width={20}
            height={20}
            onClick={() => {
              setOpen(false);
            }}
          />
        )}

        {open && (
          <div className=" w-full h-[calc(100vh-6rem)] bg-red-500 text-white absolute left-0 top-24 right-0  flex flex-col justify-center items-center text-3xl gap-8 z-10">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {link.title}
              </Link>
            ))}
            {!user ? (
              <Link
                href="/login"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Login
              </Link>
            ) : (
              <Link
                href="/orders"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Orders
              </Link>
            )}

            <Link
              href="/cart"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CartIcon />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
