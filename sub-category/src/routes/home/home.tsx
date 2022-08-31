import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../../category/category";
import ShoppingCart from "../../components/productDetail/Items/shoppingCart/shoppingCart";
import ProductDetail from "../../components/productDetail/productDetail";
import HomePage from "../../homepage/homepage";

import SubHome from "./subhome.component";
const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="subhome/:categoryId" element={<SubHome />} />
      <Route
        path="subhome/:firstLevelName/:categoryName/:categoryId/:pageNum"
        element={<SubHome />}
      />
      <Route
        path="subhome/:firstLevelName/:parentId/:categoryName/:categoryId/:pageNum"
        element={<SubHome />}
      />
      <Route path="sku/:goodsId" element={<ProductDetail />} />
      <Route path="shoppingcart" element={<ShoppingCart />} />
    </Routes>
  );
};

export default Home;
