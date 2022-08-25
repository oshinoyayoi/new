import { Link, Route, Routes } from "react-router-dom";
import Home from "../../routes/home/home";
import SubHome from "../../routes/home/subhome.component";
import SubHome1 from "../../routes/home/subhome1.component ";
import { MenuItemsProps } from "../category";
import { MenuProps } from "./MenuItems";
import "./subMenu.styles.css";

export type SubProps = {
  sub: MenuItemsProps;
  firstLevelName?: string;
  secondCategoryName?: string;
};

const SubMenu = ({ sub, firstLevelName, secondCategoryName }: SubProps) => {
  const { categoryName, categoryId } = sub;

  return (
    <div className="subCategory-list">
      <Link
        className="toSubCategory"
        to={`/subHome/${firstLevelName}/${categoryName}/${categoryId}/1`}
      >
        {categoryName}
        {categoryId}
      </Link>
    </div>
  );
};
export default SubMenu;
