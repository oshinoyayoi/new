import Lead from "../navigation/lead.component";
import Introduction from "../../components/introduction/introduction.components";
import Navigation from "../navigation/navigation.component";
import Category from "../../category/category";
import { Outlet } from "react-router-dom";
import Product from "../../components/product-list/product";
import { Fragment } from "react";

const SubHome = () => {
  return (
    <Fragment>
      <div className="subCategoryHome">
        <Category />
        <Lead />
        <Navigation />
        <Introduction />
        <Product />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default SubHome;
