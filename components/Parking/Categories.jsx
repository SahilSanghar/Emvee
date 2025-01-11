"use client"
import Image from "next/image";
import React from "react";
import { productsData } from "../../data/ParkingModel"; // Import the data
import { useRouter } from "next/navigation";

const Categories = () => {
    const router = useRouter();

    const handleNavigation = (route) => {
      router.push(route);
    };

  return (
    <div className="max-w-[80%] mx-auto my-8">
      <h2 className="text-2xl font-bold text-left mb-2">Models</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t-2 pt-10">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="p-6 border rounded-lg cursor-pointer shadow hover:shadow-lg transition-shadow duration-300 bg-white text-center"
            onClick={() => handleNavigation(product.route)}
          >
            <Image src={product.image} alt={product.model} width={300} height={200} />
            <p className="text-xl font-semibold">{product.model}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
