import Introduction from "../../components/introduction/introduction.components";
import Category from "../../category/category";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "../../components/product-list/navigation/navigation.component";
import Lead from "../../components/product-list/navigation/lead.component";
import Product2 from "../../components/product-list/navigation/product2/product2";

const SubHome1 = () => {
  return (
    <Fragment>
      <div className="subCategoryHome1">
        <Category />

        <Navigation />
        <Introduction />
        <Product2 />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default SubHome1;
