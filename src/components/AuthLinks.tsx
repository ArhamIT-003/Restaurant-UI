"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthLinks = () => {
  const { status } = useSession();

  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href="/orders">Orders</Link>
          <span
            className="ml-4 cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </span>
        </>
      ) : (
        <Link
          href="/login
          "
        >
          login
        </Link>
      )}
    </>
  );
};

export default AuthLinks;
