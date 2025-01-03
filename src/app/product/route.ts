import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      name: "Classic Burger",
      price: 5.99,
      imageSrc: "/burger2.jpg",
      imageAlt: "Classic Burger",
    },
    {
      id: 2,
      name: "Cheesy Pizza",
      price: 8.99,
      imageSrc: "/pizza2.jpg",
      imageAlt: "Cheesy Pizza",
    },
    {
      id: 3,
      name: "Crispy Fries",
      price: 3.99,
      imageSrc: "/fries3.jpg",
      imageAlt: "Crispy Fries",
    },
    {
      id: 4,
      name: "Club Sandwiches",
      price: 3.99,
      imageSrc: "/sandwiches2.jpg",
      imageAlt: "Club Sandwiches",
    },
    {
      id: 5,
      name: "Soft Drinks",
      price: 3.99,
      imageSrc: "/drinks2.jpg",
      imageAlt: "Soft Drinks",
    },
    {
      id: 6,
      name: "Salads",
      price: 3.99,
      imageSrc: "/salad2.jpg",
      imageAlt: "Salads",
    },
  ];
  return NextResponse.json(products);
}
