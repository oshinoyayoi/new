import React, { useState, useEffect } from "react";
import axios from "axios";
import GoodsItems from "././components/goodsItems";
import "./goods-List.styles.css";

function GoodsList() {
  const [goodslist, setGoodsList] = useState([]);

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/newList")
      .then((response) => setGoodsList(response.data.data));
  }, []);

  return (
    <div>
      <div className="goodsList">
        {goodslist.map((goods) => {
          return <GoodsItems key={goods.goodsId} goods={goods} />;
        })}
      </div>
    </div>
  );
}

export default GoodsList;
