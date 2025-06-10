import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();

  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);
  console.log(filteredProducts);
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="uppercase font-medium text-2xl ">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filteredProducts
          .filter((v) => v.inStock)
          .map((v, i) => {
            return <ProductCard key={i} product={v} />;
          })}
      </div>
    </div>
  );
};

export default AllProducts;
