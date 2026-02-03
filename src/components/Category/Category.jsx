import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      // Card
      <div className="flex-1 basis-80" key={card.id}>
        {/* Card Image */}
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} className="absolute bottom-0" />
        </div>

        {/* Card Content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 font-bold text-3xl">{card.name}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link
            to={card.path}
            className="bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg 
            md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer" >
            See All
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading highlight="Shop" header="by Category" />

        {/* Category cards */}
        <div className="flex flex-wrap gap-10 md:mt-15 ">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    name: "Fruits & Veggies",
    description:
      "Fresh and organic product sourced daily from local farms. Explore a wide  range of seasonal fruits and vegetables.",
    image: FruitsCat,
    path: "/Fruits",
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    description:
      "Wholesome dairy product and free range eggs. Discover a variety of milk, cheese, yogurt, and more.",
    image: DairyCat,
    path: "/Dairy",
  },
  {
    id: 3,
    name: "Meat & Seafood",
    description:
      "High quality, sustainably sourced meat and seafood. Choose from a selection of fresh cuts, fish, and shellfish.",
    image: SeaFoodCat,
    path: "/SeeFood",
  },
];
