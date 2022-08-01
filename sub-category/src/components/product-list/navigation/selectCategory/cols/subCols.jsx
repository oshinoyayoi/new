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

  let counter = 0;
  for (const obj of cols) {
    if (obj.cols !== "0") counter++;
  }

  return (
    <div>
      <div className="subCategory-list">
        <div className="checkbox">
          <input
            type="checkbox"
            onChange={changeFilterListHandler}
            checked={filteredResults.includes(cols)}
          />
          {cols}
          {counter}
        </div>
        <div className="num">{value}</div>
      </div>
    </div>
  );
};
export default SubCols;
