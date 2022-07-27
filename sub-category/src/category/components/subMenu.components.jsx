import { Link } from "react-router-dom";
import "./subMenu.styles.css";

const SubMenu = ({ sub }) => {
  const { categoryName, categoryId } = sub;
  return (
    <div className="subCategory-list">
      <Link className="toSubCategory" to="/subHome">
        {categoryName}
        {categoryId}
      </Link>
    </div>
  );
};
export default SubMenu;
