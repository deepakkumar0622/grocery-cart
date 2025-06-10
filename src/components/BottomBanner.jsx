import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="mt-24 relative">
      <img
        src={assets.bottom_banner_image}
        alt=""
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        className="w-full md:hidden"
        alt=""
      />

      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Why we Are the Best?
          </h1>
          {features.map((v, i) => (
            <div key={i} className="flex items-center gap-4 mt-2">
              <img src={v.icon} alt="" className="md:w-11 w-9" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">{v.title}</h3>
                <p className="text-gray-500/70 text-xs md:text-sm">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
