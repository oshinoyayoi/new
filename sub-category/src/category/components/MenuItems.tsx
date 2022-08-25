import SubMenu from "./subMenu.components";
import "./MenuItems.styles.css";
import { MenuItemsProps } from "../category";

export type MenuProps = {
  Item: MenuItemsProps;
  secondCategoryName?: string;
};

const MenuItem = ({ Item, secondCategoryName }: MenuProps) => {
  const { categoryName, subList, categoryImage } = Item;

  return (
    <div className="first-level-categories">
      <div className="first-category-head">{categoryName}</div>
      <div className="second-background">
        <div className="img">
          <img src={categoryImage} alt="imgs" />

          <span className="category-name" data-testid="custom-element">
            {categoryName}
          </span>
          <ul className="category-List">
            {subList.map((sub) => {
              return (
                <SubMenu
                  key={sub.categoryId}
                  sub={sub}
                  firstLevelName={categoryName}
                  secondCategoryName={secondCategoryName}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
