import Image from "next/image";
import React from "react";
import image from "./assets/profile.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center">
        <div className="text-black text-lg font-bold">whatbytes</div>
        <div className="flex items-centerm">
          <Image
            width={40}
            height={40}
            src={image}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-black ml-4 mt-2">Ayush Sahrawat</span>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
