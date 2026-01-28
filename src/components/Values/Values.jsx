import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {

    const leftValues = value.slice(0, 2).map(item => {
        return(
            <div className="flex md:flex-row-reverse items-center gap-7">
                <div>
                    <span className="flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{item.icon}</span>
                </div>
                <div className="md:text-right">
                    <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 m-2">{item.para}</p>
                </div>
            </div>
        )
    })


    const rightValues = value.slice(2).map(item => {
        return(
            <div className="flex items-center gap-7">
                <div>
                    <span className="flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{item.icon}</span>
                </div>
                <div>
                    <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 m-2">{item.para}</p>
                </div>
            </div>
        )
    })
    
  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading highlight="Our" header="Value" />

        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15 ">

          {/* Left values side */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>
          
            {/* Center image */}
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} />
          </div>

          {/* Right value side */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "it is a long established fact that a render will be distracted by the redable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "it is a long established fact that a render will be distracted by the redable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "it is a long established fact that a render will be distracted by the redable.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "it is a long established fact that a render will be distracted by the redable.",
    icon: <FaSeedling />,
  },
];
