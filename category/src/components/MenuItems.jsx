import SubMenu from "./subMenu.components";
import "./MenuItems.styles.css";

const MenuItem = ({ Item }) => {
  const { categoryName, subList, categoryImage } = Item;
  return (
    <div className="first-level-categories">
      <div className="first-category-head">{categoryName}</div>
      <div className="second-background">
        <div className="img">
          <img src={categoryImage} alt="imgs" />

          <p className="category-name">{categoryName}</p>
          <ul className="category-List">
            {subList.map((sub) => {
              return <SubMenu key={sub.categoryId} sub={sub} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
