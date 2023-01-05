import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="border-black-200 bg-orange-300 px-2 py-2.5 sm:px-4">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/" className="flex space-x-2">
          <span className="self-center text-2xl font-bold">Markbook</span>
        </Link>
        <button className="Button violet flex items-center space-x-1 rounded border border-black bg-transparent p-1">
          <span>My Profile</span>
          <CgProfile size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
