import { Link } from "react-router-dom";

const CategoryNames = ({
  Item,
  parentId,
  firstLevelName,
  secondCategoryName,
}) => {
  const { categoryName, subNumsOfGoods } = Item;
  console.log(secondCategoryName);
  return (
    <div className="a-colAndColname">
      <div className="a-colNames">
        <Link
          className="toSubCategoryList"
          to={`/subHome/${firstLevelName}/${categoryName}/${parentId}`}
        >
          {categoryName}({subNumsOfGoods})
        </Link>
      </div>
    </div>
  );
};
export default CategoryNames;
