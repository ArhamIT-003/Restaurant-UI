import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX CONTAINER */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:h-[70%] md:flex-row md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="w-full h-1/3 relative md:h-full md:w-1/2">
          <Image
            src="/loginBg.png"
            alt="login-img"
            className="object-cover"
            fill
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2 md:gap-4 lg:gap-6">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>
            Login into your account or create a new one using socials button
          </p>
          <button className="flex gap-4 ring-1 ring-orange-100 rounded-md p-4">
            <Image
              src="/google.png"
              alt="login-img"
              className="object-contain"
              width={20}
              height={20}
            />
            <span>Login with Google</span>
          </button>
          <button className="flex gap-4 ring-1 ring-orange-100 rounded-md p-4">
            <Image
              src="/google.png"
              alt="login-img"
              className="object-contain"
              width={20}
              height={20}
            />
            <span>Login with Google</span>
          </button>
          <p>
            Have a problem?{" "}
            <Link href="/" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
