import SubCols from "./subCols";

const ColNames = ({ Item, filteredResults, setFilteredResults }) => {
  const { colNames, cols } = Item;

  return (
    <div className="a-colAndColname">
      <div className="a-colNames">{colNames}</div>
      <ul className="category-List">
        {Object.entries(cols).map(([key, value], index) => {
          return (
            <SubCols
              key={index}
              cols={key}
              value={value}
              filteredResults={filteredResults}
              setFilteredResults={setFilteredResults}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ColNames;
