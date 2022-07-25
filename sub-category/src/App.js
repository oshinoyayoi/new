import { Routes, Route } from "react-router-dom";
import "./App.styles.css";
import SubHome from "./routes/home/subhome.component";
import Home from "./routes/home/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="subhome" element={<SubHome />} />
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
