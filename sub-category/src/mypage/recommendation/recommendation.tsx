import React, { useState, useEffect } from "react";
import axios from "axios";
import GoodsItem from "./components/goodsItem.components";
import "./recommendation.styles.css";

type itemProps = {
  goodsId: number;
  goodsName: string;
  sellingPrice: number;
  goodsCoverImg: string;
};
const Recommendation = () => {
  const [rec, setRec] = useState([]);

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/recommendation?configType=4")
      .then((response) => setRec(response.data.data));
  }, []);

  return (
    <div>
      <h1>おすすめ商品</h1>
      <div className="goodsList-re">
        {rec.map((items: itemProps, index) => {
          return <GoodsItem key={index} items={items} />;
        })}
      </div>
    </div>
  );
};

export default Recommendation;
