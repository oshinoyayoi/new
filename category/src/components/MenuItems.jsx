import SubMenu from "./subMenu.components";
import "./MenuItems.styles.css";

const MenuItem = ({ Item }) => {
  const { categoryName, subList } = Item;
  return (
    <div className="first-level-categories">
      <div className="first-category-head">{categoryName}</div>
      <div className="second-background">
        <ul className="category-List">
          {subList.map((sub) => {
            return <SubMenu key={sub.categoryId} sub={sub} />;
          })}
        </ul>
      </div>
    </div>
  );
};
export default MenuItem;
