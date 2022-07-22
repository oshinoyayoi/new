import React, { useState, useEffect } from "react";
import axios from "axios";
import GoodsItems from "././components/goodsItems";

function GoodsList() {
  const [goodslist, setGoodsList] = useState([]);

  //获取所有内容,get
  useEffect(() => {
    axios
      .post("http://localhost:8080/categoryList", {
        categoryId: 19,
        col1: "おっとまん付き",
        col2: "",
        col3: "",
        pageNum: 1,
        orderBy: "selling_price",
        ascOrDesc: "asc",
      })
      .then((response) => setGoodsList(response.data.data));
  }, []);

  return (
    <div>
      <h1>おすすめ商品</h1>
      <div className="goodsList">
        {goodslist.map((goods) => {
          return <GoodsItems key={goods.goodsId} goods={goods} />;
        })}
      </div>
    </div>
  );
}

export default GoodsList;
