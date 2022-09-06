import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../../category/category";
import ShoppingCart from "../../components/productDetail/Items/shoppingCart/shoppingCart";
import ProductDetail from "../../components/productDetail/productDetail";
import HomePage from "../../homepage/homepage";
import ChangeAddress from "../../mypage/changeAddress/changeAddress";
//import CreditCard from "../../mypage/creditCard/task.component";
import Liked from "../../mypage/liked/liked";
import Mypage from "../../mypage/mypage";

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
      <Route path="mypage" element={<Mypage />} />
      <Route path="mypage/liked" element={<Liked />} />
      <Route path="mypage/address" element={<ChangeAddress />} />
    </Routes>
  );
};

export default Home;
