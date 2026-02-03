import React from "react";

const Banner = ({ title, image }) => {
  return (
    <div
      className="h-[50vh] mt-25 flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10">
        {title}
      </h2>
      <div className="bg-black/40 absolute inset-0"></div>
    </div>
  );
};

export default Banner;
