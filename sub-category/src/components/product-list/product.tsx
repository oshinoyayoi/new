import { DetailedHTMLProps, Fragment, OptionHTMLAttributes } from "react";
import "./product.styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import GoodsItems from "./components/goodsItems";
import { useParams } from "react-router-dom";
import ColNames from "./navigation/selectCategory/cols/colNames";
import CategoryNames from "./navigation/selectCategory/cols/categoryNames";
import PageChangeBar from "./navigation/pageChangeBar/pageChangeBar";

//创建一个context
//export const Context = createContext([]);
export type GoodsProps = {
  goodsId: number;
  goodsName: string;
  sellingPrice: number;
  goodsCoverImg: string;
  colImg: string;
  goodslist: GoodsProps[];
};
export type goodsDetailsList = {
  colNames: string;
  cols: { key: number };
};
const Product = () => {
  const [goodslist, setGoodsList] = useState<GoodsProps[]>([]);
  const param = useParams();
  const firstLevelName = param.firstLevelName;
  const secondCategoryName = param.secondCategoryName;
  const categoryName = param.categoryName;
  const categoryId = parseInt(param.categoryId as string);
  const pageNow = parseInt(param.pageNum!);
  const goodsCategoryId = parseInt(param.categoryId as string);
  const [colList, setColList] = useState([]);
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [category, setCategory] = useState([]);
  //const [third, setThird] = useState([]);
  //获取所有内容,get

  useEffect(() => {
    axios
      .post(`${"http://localhost:8080/newLists"}/${goodsCategoryId}`)
      .then((response) => setGoodsList(response.data.data));
  }, [goodsCategoryId, categoryId, categoryName, pageNow]);

  //
  console.log(pageNow);
  useEffect(() => {
    axios
      .post("http://localhost:8080/categoryList", {
        categoryId: goodsCategoryId,
        cols: "",
        pageNum: pageNow,
        orderBy: "selling_price",
        ascOrDesc: "asc",
      })
      .then((response) => setColList(response.data.data.colNameAndCountCol));
  }, [goodsCategoryId, pageNow]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/categoryList", {
        categoryId: goodsCategoryId,
        cols: "",
        pageNum: pageNow,
        orderBy: "selling_price",
        ascOrDesc: "asc",
      })
      .then((response) =>
        response.data.data.countAndParentId
          ? setCategory(response.data.data.countAndParentId)
          : setCategory([])
      );
  }, [goodsCategoryId, pageNow]);

  //清空col
  const clearAllDetails = () => {
    setFilteredResults([]);
  };
  //点x删掉
  const clearThisDetail: (detail: string) => void = (detail) => {
    let result: string[] = filteredResults.slice();
    // console.log(detail);
    result.splice(result.indexOf(detail), 1);
    setFilteredResults(result);
  };
  //count
  let counter = 6;
  /*for (const obj of goodslist) {
    if (obj.goodsId !== "0") counter++;
  }
*/
  //根据选择的col变更商品
  console.log(goodslist);
  let resultList = goodslist.slice();
  let filter = (
    condition: { [x: string]: any; col?: string[] },
    resultList: any[]
  ) => {
    return resultList.filter((Item) => {
      return Object.keys(condition).every((key) => {
        return String(Item[key]).includes(String(condition[key]).trim());
      });
    });
  };
  var condition = { col: filteredResults };
  var aa = filter(condition, resultList);
  console.log(aa);

  function typeChange() {
    //获取select对象
    var myItem = document.getElementById("sel") as HTMLSelectElement | null;
    //获取select中选中的那个option对象,并取得区分的on属性的值
    var myOption =
      myItem?.options[myItem.selectedIndex].getAttribute("data-on");
    //根据获取到的不同属性值，来指定不同事件
    if (myOption === "1") {
      goodslist.sort(function (a: any, b: any) {
        return a.goodsId - b.goodsId;
      });
      setGoodsList([...goodslist]);
    }
    if (myOption === "2") {
      goodslist.sort(function (a: any, b: any) {
        return a.sellingPrice - b.sellingPrice;
      });
      setGoodsList([...goodslist]);
    }
    if (myOption === "3") {
      goodslist.sort(function (a: any, b: any) {
        return b.sellingPrice - a.sellingPrice;
      });
      setGoodsList([...goodslist]);
    }
  }

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
                    <li>
                      <button
                        className="details-clear-this-button"
                        onClick={(event) =>
                          clearThisDetail(filteredResults as unknown as string)
                        }
                      >
                        {filteredResults} ✕
                      </button>
                    </li>
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
            全<span>6</span>件
          </div>
          <select id="sel" onChange={typeChange} className="orderBy">
            <option data-on="1" value="goods_id">
              おすすめ順
            </option>
            <option data-on="2" value="selling_price">
              価格の安い順
            </option>
            <option data-on="3" value="selling_price">
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
          {aa.map((goods, id) => {
            return <GoodsItems key={id} goods={goods} />;
          })}
        </div>

        <div className="pageNum">
          <PageChangeBar
            pageNow={pageNow}
            numsOfItems={counter}
            parentId={goodsCategoryId}
            categoryId={categoryId}
            categoryName={categoryName}
            firstCategoryName={firstLevelName}
            secondCategoryName={secondCategoryName}
            i={0}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
