import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-center">
      <Link href={"/"}>
        <a>
          <h1 className="text-white text-5xl font-bo inline-block hover:text-red-500 duration-200 cursor-pointer my-16 mx-4">
            Starwars API 🚀🚀
          </h1>
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
