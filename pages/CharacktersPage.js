import Image from "next/image";
import Link from "next/link";
import React from "react";

const CharacktersPage = ({ name, image, id }) => {
  return (
    <Link href={`/charackter/${id}.json`}>
      <a>
        <div className="w-64 bg-zinc-700 hover:scale-110 duration-200 cursor-pointer rounded-lg">
          <img
            src={image}
            alt="image of charackter"
            className="h-80 object-cover w-full object-top rounded-t-lg"
          />
          <div className="h-0.5 w-full bg-red-500"></div>
          <h1 className="text-white font-medium text-2xl py-3 pl-3 hover:text-red-500">
            {name}
          </h1>
        </div>
      </a>
    </Link>
  );
};

export default CharacktersPage;
