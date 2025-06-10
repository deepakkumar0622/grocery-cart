import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useAppContext } from "./contexts/AppContext";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { userLogin } = useAppContext();
  return (
    <div>
      {isSellerPath ? " " : <Navbar />}
      {userLogin ? <Login /> : ""}
      <Toaster />
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"} `}
      >
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AllProducts />} path="/products" />
          <Route element={<ProductCategory />} path="/products/:catagory" />
          <Route element={<ProductDetails />} path="/products/:catagory/:id" />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
