"use client";

import React, { useEffect, useState } from "react";
import Products from "@/components/Products";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1 className="text-3xl font-bold text-center my-8">Our Products</h1>
      <Products products={products} />
    </main>
  );
};

export default ProductPage;
