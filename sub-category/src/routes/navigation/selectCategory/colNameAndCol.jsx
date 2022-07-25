/*
import { useEffect, useState } from "react";
import axios from "axios";
import Cols from "./cols/cols";

function ColNameAndCol() {
  const [colAndName, setColAndName] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/categoryList")
      .then((response) => response.data)
      .then((result) => setColAndName(result.data.colNameAndCountCol));
  });

  return (
    <div className="main-FaceAttributes">
      <div className="colNameAndCol">
        {colAndName.map((Item) => {
          return <Cols key={Item.colNames} Item={Item} />;
        })}
      </div>
    </div>
  );
}
export default ColNameAndCol;
*/
