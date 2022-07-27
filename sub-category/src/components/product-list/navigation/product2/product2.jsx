import { createContext, Fragment } from "react";
import "./product.styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import GoodsItems from "../../components/goodsItems";

//创建一个context
export const Context = createContext([]);

const Product2 = () => {
  const [goodslist, setGoodsList] = useState([]);

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/newLists")
      .then((response) => setGoodsList(response.data.data));
  }, []);

  //count
  let counter = 0;
  for (const obj of goodslist) {
    if (obj.goodsId !== "0") counter++;
  }

  function typeChange() {
    //获取select对象
    var myItem = document.getElementById("sel");
    //获取select中选中的那个option对象,并取得区分的on属性的值
    var myOption = myItem.options[myItem.selectedIndex].getAttribute("on");
    //根据获取到的不同属性值，来指定不同事件
    if (myOption === "1") {
      goodslist.sort(function (a, b) {
        return a.goodsId - b.goodsId;
      });
      setGoodsList([...goodslist]);
    }
    if (myOption === "2") {
      goodslist.sort(function (a, b) {
        return a.sellingPrice - b.sellingPrice;
      });
      setGoodsList([...goodslist]);
    }
    if (myOption === "3") {
      goodslist.sort(function (a, b) {
        return b.sellingPrice - a.sellingPrice;
      });
      setGoodsList([...goodslist]);
    }
  }
  //setGoodsList

  return (
    <Fragment>
      <div className="g-layout-body">
        <div className="count-and-orderby">
          <div className="p-controlbar_total">
            全<span>{counter}</span>件
          </div>
          <select id="sel" onChange={typeChange} className="orderBy">
            <option on="1" value="goods_id">
              おすすめ順
            </option>
            <option on="2" value="selling_price">
              価格の安い順
            </option>
            <option on="3" value="selling_price">
              価格の高い順
            </option>
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
          {goodslist.map((goods) => {
            return <GoodsItems key={goods.goodsId} goods={goods} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Product2;
