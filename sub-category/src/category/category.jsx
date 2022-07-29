import "./category.styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "./components/MenuItems";
import { Outlet, useParams } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);
  const param = useParams();
  const secondCategoryName = param.secondCategoryName;

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/category")
      .then((response) => setCategories(response.data.data));
  }, []);

  return (
    <nav>
      <div className="category">
        <div className="button">カテゴリ</div>
        <div className="content_category">
          <ul className="a-goodsList">
            {categories.map((Item) => {
              return (
                <MenuItem
                  key={Item.categoryId}
                  Item={Item}
                  secondCategoryName={secondCategoryName}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Category;
