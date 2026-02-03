import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const renderSteps = steps.map((item) => {
    return (
      <div className={`flex-1 basis-75 ${item.id % 2 === 0 ? 'md:-mt-100' : ''}`} key={item.id}>
        <span
          className="flex items-center justify-center mx-auto w-18 h-18 text-8xl bg-zinc-800 text-white
         rounded-full outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed"
        >
          {item.number}
        </span>

        <div className="flex items-center gap-x-5 mt-10 ">
          <span className="flex w-15 h-15 rounded-full items-center justify-center text-3xl
           bg-linear-to-b from-orange-400 to-orange-500 text-white">
            {item.icon}
          </span>

          <div className="flex-1">
            <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
            <p className="text-zinc-600 mt-2">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" header="Process" />
        </div>

        <div className="flex flex-wrap gap-y-17 md:mt-20 mt-10 md:pt-50 items-center justify-center ">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
