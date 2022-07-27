import { Link } from "react-router-dom";
import "./subMenu.styles.css";

const SubMenu = ({ sub, firstLevelName }) => {
  const { categoryName, categoryId } = sub;

  return (
    <div className="subCategory-list">
      <Link
        className="toSubCategory"
        to={`/subHome/${categoryId}`}
        state={{
          categoryName: categoryName,
          firstLevelName: firstLevelName,
          goodsCategoryId: categoryId,
        }}
      >
        {categoryName}
        {categoryId}
      </Link>
    </div>
  );
};
export default SubMenu;
