const SubMenu = ({ sub }) => {
  const { categoryName } = sub;
  return (
    <div className="subCategory-list">
      <p>{categoryName}</p>
    </div>
  );
};
export default SubMenu;
