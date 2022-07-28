const SubCols = ({ cols, value, filteredResults, setFilteredResults }) => {
  const changeFilterListHandler = () => {
    let result = filteredResults.slice();
    if (result.includes(cols)) {
      let index = result.indexOf(cols);
      result.splice(index, 1);
    } else {
      result.push(cols);
    }
    setFilteredResults(result);
  };

  return (
    <div>
      <div className="subCategory-list">
        <div onChange={changeFilterListHandler} className="checkbox">
          <input type="checkbox" />
          {cols}
        </div>
        <div className="num">{value}</div>
      </div>
    </div>
  );
};
export default SubCols;
