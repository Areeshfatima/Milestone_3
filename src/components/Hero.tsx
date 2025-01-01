import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-80 flex justify-center items-center bg-cover bg-center rounded-lg shadow-lg my-5"
      style={{ backgroundImage: "url('/Pk.flag.jpg')" }}
    >
      <h1 className="text-white text-4xl font-bold  text-center drop-shadow-lg">
        Explore Historical Places of Pakistan
      </h1>
    </div>
  );
};

export default Hero;
