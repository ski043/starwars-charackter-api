import Link from "next/link";
import React from "react";

const CharackterDetails = ({ name, image, height, mass, gender, wiki }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center">
      <div className="lg:w-1/2">
        <img
          src={image}
          alt="charackter img"
          className="w-9/12 mx-auto lg:h1/2 lg:object-cover"
        />
      </div>
      <div className="w-9/12 mx-auto lg:w-1/2">
        <h1 className="text-white inline-block text-2xl font-medium pt-4">
          {name}
        </h1>
        <p className="text-xl text-gray-300 pt-10">Height: {height}</p>
        <p className="text-xl text-gray-300 pt-2">Mass: {mass}</p>
        <p className="text-xl text-gray-300 pt-2">Gender: {gender}</p>
        <Link href={wiki}>
          <a>
            <button className="bg-zinc-700 py-4 px-6 hover:bg-red-500 duration-200 rounded-lg w-full text-xl font-semibold text-white mt-10 lg:w-1/2">
              Learn More!
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CharackterDetails;
