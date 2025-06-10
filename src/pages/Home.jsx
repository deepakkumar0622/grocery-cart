import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/categories";
import BsetSeller from "../components/BsetSeller";
import BottomBanner from "../components/BottomBanner";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BsetSeller />
      <BottomBanner />
      <NewsLetter />
    </div>
  );
};

export default Home;
