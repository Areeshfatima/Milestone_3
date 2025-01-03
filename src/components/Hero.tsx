import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-[80vh] bg-cover bg-center bg-no-repeat py-12"
      style={{ backgroundImage: "url('/fastfood.jpg')" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        {/* Left Content */}
        <div className="max-w-lg text-center p-6 bg-white bg-opacity-80 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold text-red-600 mb-6">
            Taste Happiness, One Bite at a Time!
          </h1>
          <p className="text-black text-lg leading-relaxed mb-8">
            Craving something irresistible? At FastFood, we serve flavor-packed
            delights that make every meal unforgettable. Dive into our juicy
            burgers, crispy fries, and so much more. Satisfaction guaranteed!
          </p>
          <button className="bg-yellow-400 text-red-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-500 shadow-lg transition-transform transform hover:scale-105">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
