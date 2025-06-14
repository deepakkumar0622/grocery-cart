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
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./pages/seller/SellerLayout";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { userLogin, isSeller } = useAppContext();
  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
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
          <Route element={<Cart />} path="/cart" />
          <Route element={<AddAddress />} path="/add-address" />
          <Route element={<MyOrders />} path="/my-orders" />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={isSeller ? <AddProduct /> : null} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
