"use client";
import React, { useState } from "react";
import Image from "next/image";

const Deal = () => {
  const [showDeals, setShowDeals] = useState(false);

  const toggleDeals = () => {
    setShowDeals(!showDeals);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-4xl font-extrabold text-red-600">
          <span className="text-yellow-500">Flavor Haven</span> Today's Deals
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Click below to reveal today's irresistible offers!
        </p>

        <button
          onClick={toggleDeals}
          className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          Show Today's Deals
        </button>

        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 transition-opacity duration-500 ease-in-out ${
            showDeals ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Pizza Deal */}
          <div className="border rounded-lg shadow-lg p-6 bg-white">
            <div className="relative w-full h-64">
              <Image
                src="/pizza2.jpg"
                alt="Pizza Deal"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold text-red-600 mt-4">Pizza Deal</h2>
            <p className="mt-2 text-gray-600">
              Enjoy a large cheesy pizza with your favorite toppings for just{" "}
              <span className="text-yellow-500 font-semibold">$12.99</span>.
            </p>
          </div>

          {/* Zinger Burger Deal */}
          <div className="border rounded-lg shadow-lg p-6 bg-white">
            <div className="relative w-full h-64">
              <Image
                src="/burger2.jpg"
                alt="2 Zinger Burgers Deal"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold text-red-600 mt-4">
              2 Zinger Burgers Deal
            </h2>
            <p className="mt-2 text-gray-600">
              Grab two zinger burgers packed with flavor for just{" "}
              <span className="text-yellow-500 font-semibold">$9.99</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deal;
