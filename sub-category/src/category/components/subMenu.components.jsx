import "./subMenu.styles.css";

const SubMenu = ({ sub }) => {
  const { categoryName } = sub;
  return (
    <div className="subCategory-list">
      <span>{categoryName}</span>
    </div>
  );
};
export default SubMenu;
