import React from "react";
import Image from "next/image";

// Category Data
const categories = [
  {
    name: "Burgers",
    imageSrc: "/burger.jpg",
    imageAlt: "Burgers",
  },
  {
    name: "Fries",
    imageSrc: "/fries2.jpg",
    imageAlt: "Fries",
  },
  {
    name: "Pizza",
    imageSrc: "/pizza.jpg",
    imageAlt: "Pizza",
  },
  {
    name: "Sandwiches",
    imageSrc: "/sandwiches.jpg",
    imageAlt: "Sandwiches",
  },
  {
    name: "Salads",
    imageSrc: "/salad.jpg",
    imageAlt: "Salads",
  },
  {
    name: "Drinks",
    imageSrc: "/drinks.jpg",
    imageAlt: "Drinks",
  },
];

const Categories = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={category.name} className="relative group">
              <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 ease-in-out">
                <span className="text-white text-2xl font-semibold">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
