import { Link } from "react-router-dom";
import "./subMenu.styles.css";

const SubMenu = ({ sub, firstLevelName, secondCategoryName }) => {
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
