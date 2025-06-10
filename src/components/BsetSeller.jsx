import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../contexts/AppContext";

const BsetSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid sm:grid-cols-1  md:grid-cols-2 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {products
          .filter((v) => v.inStock)
          .slice(0, 5)
          .map((v, i) => (
            <ProductCard key={i} product={v} />
          ))}
      </div>
    </div>
  );
};

export default BsetSeller;
