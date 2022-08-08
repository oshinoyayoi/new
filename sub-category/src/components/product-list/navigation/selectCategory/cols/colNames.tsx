import { goodsDetailsList } from "../../../product";
import SubCols from "./subCols";

export type ColNamesProps = {
  Item: goodsDetailsList;
  filteredResults: string[];
  setFilteredResults: React.Dispatch<React.SetStateAction<string[]>>;
};

const ColNames = ({
  Item,
  filteredResults,
  setFilteredResults,
}: ColNamesProps) => {
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
