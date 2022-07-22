import Lead from "../navigation/lead.component";
import Introduction from "../../components/introduction/introduction.components";
import Navigation from "../navigation/navigation.component";
import Category from "../../category/category";

import Product from "../../components/product-list/product";

const Home = () => {
  return (
    <div>
      <Category />
      <Lead />
      <Navigation />
      <Introduction />
      <Product />
    </div>
  );
};
/*
<Routes>
<Route path="/" element={<Category />} />
<Route path="/" element={<Lead />}>
  <Route path="/" element={<Navigation />} />
  <Route path="/" element={<Introduction />} />
</Route>
</Routes>
*/

export default Home;
