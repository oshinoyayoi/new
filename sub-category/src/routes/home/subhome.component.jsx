import Introduction from "../../components/introduction/introduction.components";
import Category from "../../category/category";
import { Outlet } from "react-router-dom";
import Product from "../../components/product-list/product";
import { Fragment } from "react";

import Lead from "../../components/product-list/navigation/lead.component";

const SubHome = () => {
  return (
    <Fragment>
      <div className="subCategoryHome">
        <Category />
        <Lead />
        <Introduction />
        <Product />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default SubHome;
