import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../../category/category";
import ProductDetail from "../../components/productDetail/productDetail";

import SubHome from "./subhome.component";
const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
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
    </Routes>
  );
};

export default Home;
