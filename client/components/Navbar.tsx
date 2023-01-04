import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="border-black-200 bg-orange-300 px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <AiOutlineHome size={20} />
          <span className="self-center text-xl font-bold">Markbook</span>
        </Link>
        <button className="flex rounded border border-black bg-transparent">
          My Profile <CgProfile size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
