import { useEffect, useRef } from "react";
import axios from "axios";

function SelectCategory() {
  const categoryRef = useRef;
  useEffect(() => {
    axios
      .post("http://localhost:8080/categoryList")
      .then((response) => response.data)
      .then((result) => categoryRef(result.data.countSubCategory));
  });

  const { countSubCategory } = categoryRef;
  if ({ countSubCategory } !== null) {
    return { countSubCategory };
  }

  return (
    <div className="p-condition-body">
      <h3 className="p-condition-t">カテゴリ</h3>
      <ul className="g-sm-lineGrid">{countSubCategory}</ul>
    </div>
  );
}
export default SelectCategory;
