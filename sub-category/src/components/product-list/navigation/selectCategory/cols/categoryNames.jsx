const CategoryNames = ({ Item }) => {
  const { categoryName, subNumsOfGoods } = Item;
  return (
    <div className="a-colAndColname">
      <div className="a-colNames">
        {categoryName}({subNumsOfGoods})
      </div>
      <ul className="category-List"></ul>
    </div>
  );
};
export default CategoryNames;
