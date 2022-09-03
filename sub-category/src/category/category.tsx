import "./category.styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "./components/MenuItems";
import { Link, Outlet, useParams } from "react-router-dom";

export type MenuItemsProps = {
  categoryName: string;
  subList: MenuItemsProps[];
  categoryImage: string;
  categoryId: number;
};

function Category() {
  const [categories, setCategories] = useState<MenuItemsProps[]>([]);
  const param = useParams();
  const secondCategoryName = param.secondCategoryName;

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/category")
      .then((response) => setCategories(response.data.data));
  }, []);

  return (
    <div className="homepage-background">
      <div className="header">
        <div className="g-header">
          <Link className="toSubCategoryList" to={`/shoppingcart`}>
            <button className="cart">カート</button>
          </Link>
        </div>
        <div className="g_outer-head">
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
          <div className="mypage">
            <Link className="toSubCategory" to={`/mypage`}>
              マイページ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
