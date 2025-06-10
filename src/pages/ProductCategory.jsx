import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { catagory } = useParams();

  const searchCatagory = categories.find(
    (i) => i.path.toLowerCase() === catagory
  );

  const filteredProducts = products.filter(
    (v) => v.category.toLowerCase() === catagory
  );
  console.log(filteredProducts);

  return (
    <div className="mt-16">
      {searchCatagory && (
        <div className="flex flex-col items-end w-max ">
          <p className="text-2xl font-medium">
            {searchCatagory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full"></div>
        </div>
      )}
      <div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
            {filteredProducts.map((v) => {
              return <ProductCard key={v._id} product={v} />;
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[60vh]">
            <p className="text-2xl font-medium text-primary">
              No Products are Found!!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
