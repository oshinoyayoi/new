import { Link } from "react-router-dom";

export type CategoryNameProps = {
  categoryName: string;
  subNumsOfGoods: number;
  categoryId: number;
};

export type CategoryItemsProps = {
  Item: CategoryNameProps;
  parentId: number;
  firstLevelName: string | undefined;
  secondCategoryName: string | undefined;
};

const CategoryNames = ({
  Item,
  parentId,
  firstLevelName,
  secondCategoryName,
}: CategoryItemsProps) => {
  const { categoryName, subNumsOfGoods, categoryId } = Item;
  //  console.log(secondCategoryName);
  return (
    <div className="a-colAndColname">
      <div className="a-colNames">
        <Link
          className="toSubCategoryList"
          to={`/subHome/${firstLevelName}/${parentId}/${categoryName}/${categoryId}/1`}
        >
          {categoryName}({subNumsOfGoods})
        </Link>
      </div>
    </div>
  );
};
export default CategoryNames;
