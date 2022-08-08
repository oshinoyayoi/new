import { Link } from "react-router-dom";
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

  /*
 state={{
          categoryName: categoryName,
          firstLevelName: firstLevelName,
          goodsCategoryId: categoryId,
        }}
*/
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
