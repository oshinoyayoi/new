import { Route, Routes } from "react-router-dom";
import Category from "../../category/category";

import SubHome from "./subhome.component";
const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="subhome/:categoryId" element={<SubHome />} />
      <Route
        path="subhome/:firstLevelName/:categoryName/:categoryId"
        element={<SubHome />}
      />
      <Route
        path="subhome/:firstLevelName/2/:categoryId/:categoryName"
        element={<SubHome />}
      />
    </Routes>
  );
};

export default Home;
