import { createContext, Fragment } from "react";
import "./product.styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import GoodsItems from "./components/goodsItems";
import { Link, useLocation, useParams } from "react-router-dom";
import ColNames from "./navigation/selectCategory/cols/colNames";
import CategoryNames from "./navigation/selectCategory/cols/categoryNames";

//创建一个context
export const Context = createContext([]);

const Product = () => {
  const [goodslist, setGoodsList] = useState([]);
  const param = useParams();
  const firstLevelName = param.firstLevelName;
  const secondCategoryName = param.secondCategoryName;
  const categoryName = param.categoryName;
  const goodsCategoryId = parseInt(param.categoryId);
  const [colList, setColList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [category, setCategory] = useState([]);
  //const [third, setThird] = useState([]);
  //获取所有内容,get

  useEffect(() => {
    axios
      .post(`${"http://localhost:8080/newLists"}/${goodsCategoryId}`)
      .then((response) => setGoodsList(response.data.data));
  }, [goodsCategoryId]);
  //
  /*
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
        response.data.data.voList
          ? setGoodsList(response.data.data.voList)
          : setGoodsList([])
      );
  }, [goodsCategoryId]);
*/
  useEffect(() => {
    axios
      .post("http://localhost:8080/categoryList", {
        categoryId: goodsCategoryId,
        cols: "",
        pageNum: 1,
        orderBy: "selling_price",
        ascOrDesc: "asc",
      })
      .then((response) => setColList(response.data.data.colNameAndCountCol));
  }, [goodsCategoryId]);

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

  //清空col
  const clearAllDetails = () => {
    setFilteredResults([]);
  };

  //count
  let counter = 0;
  for (const obj of goodslist) {
    if (obj.goodsId !== "0") counter++;
  }

  //根据选择的col变更商品
  let resultList = goodslist.slice();
  let filter = (condition, resultList) => {
    return resultList.filter((Item) => {
      return Object.keys(condition).every((key) => {
        return String(Item[key]).includes(String(condition[key]).trim());
      });
    });
  };
  var condition = { col: filteredResults };
  var aa = filter(condition, resultList);

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
  const changeToThird = () => {
    let resultList = goodslist.slice();
    let filter = (condition, resultList) => {
      return resultList.filter((Item) => {
        return Object.keys(condition).every((key) => {
          return String(Item[key]).includes(String(condition[key]).trim());
        });
      });
    };
    var condition = { categoryId: goodsCategoryId };
    var aa = filter(condition, resultList);
  };

  console.log(aa);
  return (
    <Fragment>
      <div className="g-siderbar">
        <section className="category-select">
          <h2 className="p-condition-h">
            <span>カテゴリを選択</span>
          </h2>
          <h3 className="category-title">カテゴリ</h3>
          <div className="p-condition-body">
            <section className="p-condition-item">
              <div>
                {category.map((Item, index) => {
                  return (
                    <CategoryNames
                      key={index}
                      Item={Item}
                      parentId={goodsCategoryId}
                      firstLevelName={firstLevelName}
                      secondCategoryName={secondCategoryName}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </section>

        <section className="colname-select">
          <div className="a-back">
            <h2 className="p-condition-h">
              <span>条件で絞り込む</span>
            </h2>
            <div className="g-modal">
              <section className="p-condition-item">
                <div className="p-condition-tiem-inner">
                  <h3 className="p-condition-t">現在絞り込んでいる条件</h3>
                  <ul className="g-flow-xs">
                    <li>{filteredResults}</li>
                  </ul>
                </div>
                <div className="p-clear-btns">
                  <button
                    className={
                      filteredResults.length < 1
                        ? "clear-btn"
                        : "clear-btn-active"
                    }
                    onClick={clearAllDetails}
                    disabled={filteredResults.length < 1}
                    type="button"
                  >
                    <span>全条件をクリア</span>
                  </button>
                </div>
              </section>

              <div className="mainFaceAttributes">
                <section className="p-condition-item">
                  {colList.map((Item, index) => {
                    return (
                      <ColNames
                        key={index}
                        Item={Item}
                        filteredResults={filteredResults}
                        setFilteredResults={setFilteredResults}
                      />
                    );
                  })}
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>

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
          {aa.map((goods) => {
            return <GoodsItems key={goods.goodsId} goods={goods} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
