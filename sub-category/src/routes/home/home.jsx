import Category from "../../category/category";
import { Routes, Route } from "react-router-dom";
import SubHome1 from "./subhome1.component ";
import SubHome from "./subhome.component";
const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />}>
        <Route index element={<Home />} />
        <Route path="subHome" element={<SubHome />} />
        <Route path="subHome1" element={<SubHome1 />} />
      </Route>
    </Routes>
  );
};

export default Home;
