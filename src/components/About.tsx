import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Restaurant Logo"
            width={120}
            height={120}
            className="rounded-full shadow-md"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-red-600 md:text-5xl">
          About Us
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed md:text-xl md:leading-loose">
          Welcome to{" "}
          <span className="text-yellow-500 font-semibold">Flavor Haven</span>,
          where every bite is a celebration of taste! From our mouth-watering
          burgers to our zesty pizzas and crispy fries, we promise to deliver
          happiness on every plate. At our restaurant, we don't just serve food;
          we create unforgettable dining experiences crafted with love and fresh
          ingredients.
        </p>

        <p className="mt-4 text-lg text-gray-700 md:text-xl">
          Join us on a delicious journey, because at Flavor Haven, every meal
          tells a story.
        </p>

        {/* Subscribe Button */}
        <div className="mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full max-w-md rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-r-lg hover:bg-yellow-600 focus:outline-none">
            Subscribe
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-gray-500">
          Stay updated with our latest deals, exclusive offers, and special
          recipes!
        </p>
      </div>
    </section>
  );
};

export default About;
