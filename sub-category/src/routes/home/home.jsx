import { Route, Routes } from "react-router-dom";
import Category from "../../category/category";

import SubHome from "./subhome.component";
const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="subhome/:categoryId" element={<SubHome />} />
    </Routes>
  );
};

export default Home;
