import Category from "../../category/category";
import { Routes, Route } from "react-router-dom";
import SubHome from "./subhome.component";
const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />}>
        <Route index element={<Home />} />
        <Route path="subHome" element={<SubHome />} />
      </Route>
    </Routes>
  );
};

export default Home;
