import SubMenu from "./subMenu.components";

const MenuItem = ({ Item }) => {
  const { categoryName, subList } = Item;
  return (
    <div>
      <h1>{categoryName}</h1>
      <ul className="category-List">
        {subList.map((sub) => {
          return <SubMenu key={sub.categoryId} sub={sub} />;
        })}
      </ul>
    </div>
  );
};
export default MenuItem;
