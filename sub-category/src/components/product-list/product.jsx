import { Fragment } from "react";
import GoodsList from "../../goodslist/goodslist";
import "./product.styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [sub, setSub] = useState([]);

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/newList")
      .then((response) => setSub(response.data.data));
  }, []);

  //count
  let counter = 0;
  for (const obj of sub) {
    if (obj.goodsId !== "0") counter++;
  }

  //orderBy selling pirce
  const comparePrice = () => {
    sub.sort(function (a, b) {
      return a.sellingPrice - b.sellingPrice;
    });
    setSub([...sub]);
  };
  //setGoodsList

  console.log(comparePrice);
  return (
    <Fragment>
      <div className="g-layout-body">
        <div className="count-and-orderby">
          <div className="p-controlbar_total">
            全<span>{counter}</span>件
          </div>
          <select onClick={comparePrice} className="orderBy">
            <option value="selling_price">おすすめ順</option>
            <option value="selling_price">価格の安い順</option>
          </select>
          <div className="g-checkable">表示切替</div>
          <div className="button1">
            <input
              id="productGridView"
              type="radio"
              name="display"
              value="normal"
            />
          </div>
          <div className="button2">
            <input
              id="productGridView"
              type="radio"
              name="display"
              value="normal"
            />
          </div>
        </div>
        <div className="goods-List">
          <GoodsList />
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
