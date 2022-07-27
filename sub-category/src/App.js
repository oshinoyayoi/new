import { Routes, Route } from "react-router-dom";
import "./App.styles.css";

import Home from "./routes/home/home";
import SubHome1 from "./routes/home/subhome1.component ";
import SubHome from "./routes/home/subhome.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="subhome" element={<SubHome />} />
      <Route path="subhome1" element={<SubHome1 />} />
    </Routes>
  );
};
export default App;

/*
<Routes>
<Route path="/" element={<Category />} />
<Route path="/" element={<Lead />}>
  <Route path="/" element={<Navigation />} />
  <Route path="/" element={<Introduction />} />
</Route>
</Routes>
*/
