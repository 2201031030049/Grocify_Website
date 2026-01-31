import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa6";
import Button from "../Button/Button";

const Cards = ({ image, name, price }) => {
  return (
    <div className="bg-zinc-100 p-5 rounded-xl">

      {/* Card Icon */}
      <div className="flex justify-between ">
        <span className="text-3xl text-zinc-300">
          <FaHeart />
        </span>
        <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg hover:scale-105 transition-transform">
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className="w-full h-50">
        <img src={image} className="w-full h-full mx-auto-- object-contain" />
      </div>

      {/* Card Content */}
      <div className="text-center">
        <h3 className="text-xl ">{name}</h3>
        <p className="text-xl font-semibold mt-3 mb-2">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
