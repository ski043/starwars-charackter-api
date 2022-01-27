import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-24 pb-6 text-center">
      <Link href={"https://github.com/ski043"}>
        <a>
          <h1 className="text-white text-3xl hover:text-red-500 duration-200 cursor-pointer inline-block">
            Starwars API
          </h1>
        </a>
      </Link>
    </div>
  );
};

export default Footer;
