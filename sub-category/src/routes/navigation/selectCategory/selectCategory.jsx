/*

import { useEffect, useRef } from "react";
import axios from "axios";

function SelectCategory(props) {
  const categoryRef = useRef;
  useEffect(() => {
    axios
      .post("http://localhost:8080/categoryList")
      .then((response) => response.data)
      .then((result) => categoryRef(result.data.countAndParentId));
  });

  const { categoryNums } = props;
  if ({ categoryNums } !== null) {
    return { categoryNums };
  }
  /* <div className="p-condition-body">
    <h3 className="p-condition-t">カテゴリ</h3>
    <ul className="g-sm-lineGrid">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>;
}
export default SelectCategory;

*/
