import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import CategoryNames from "./categoryNames";

const SelectCategory = () => {
  const [category, setCategory] = useState([]);
  const categoryLocation1 = useLocation().state;
  const { goodsCategoryId } = categoryLocation1;

  useEffect(() => {
    axios
      .post("http://localhost:8080/categoryList", {
        categoryId: goodsCategoryId,
        cols: "",
        pageNum: 1,
        orderBy: "selling_price",
        ascOrDesc: "asc",
      })
      .then((response) =>
        response.data.data.countAndParentId
          ? setCategory(response.data.data.countAndParentId)
          : setCategory([])
      );
  }, [goodsCategoryId]);

  return (
    <div>
      <section className="p-condition-item">
        {category.map((Item, index) => {
          return <CategoryNames key={index} Item={Item} />;
        })}
      </section>
    </div>
  );
};

export default SelectCategory;
