import { Fragment } from "react";
import "./navigation.styles.css";
import SelectCategory from "./selectCategory/selectCategory";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="g-siderbar">
        <section className="category-select">
          <h2 className="p-condition-h">
            <span>カテゴリを選択</span>
          </h2>
          <div className="p-condition-body">
            {SelectCategory.countSubCategory}
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
                    <li>無段階リクライ</li>
                  </ul>
                </div>
                <div className="p-condition-btns">
                  <button className="clear-btn">全条件をクリア</button>
                </div>
              </section>

              <div className="mainFaceAttributes">
                <section className="p-condition-item">
                  <span>機能</span>
                  <div className="select-box">
                    <ul className="g-lineGrid-item">
                      <div className="item item-checkbox">
                        <label className="checkbox">
                          <input type="checkbox" />
                        </label>
                        <ul
                          className="nav-link"
                          to="/subHome1"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          無段階リクライ(4)
                        </ul>
                      </div>
                    </ul>
                    <ul className="g-lineGrid-item">
                      <div className="item item-checkbox">
                        <label className="checkbox">
                          <input type="checkbox" />
                        </label>
                        <ul
                          className="nav-link"
                          to="/subHome1"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          おっとまん付き(6)
                        </ul>
                      </div>
                    </ul>
                  </div>
                </section>

                <section className="p-condition-item">
                  <span>素材・加工</span>
                  <div className="select-box">
                    <ul className="g-lineGrid-item">
                      <div className="item item-checkbox">
                        <label className="checkbox">
                          <input type="checkbox" />
                        </label>
                        <ul
                          className="nav-link"
                          to="/subHome1"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          ポケットコイル (2)
                        </ul>
                      </div>
                    </ul>
                  </div>
                </section>

                <section className="p-condition-item">
                  <span>商品の説明</span>
                  <div className="select-box">
                    <ul className="g-lineGrid-item">
                      <div className="item item-checkbox">
                        <label className="checkbox">
                          <input type="checkbox" />
                        </label>
                        <ul
                          className="nav-link"
                          to="/subHome1"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          座面普通 (7)
                        </ul>
                      </div>
                    </ul>
                    <ul className="g-lineGrid-item">
                      <div className="item item-checkbox">
                        <label className="checkbox">
                          <input type="checkbox" />
                        </label>
                        <ul
                          className="nav-link"
                          to="/subHome1"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          座面固め(2)
                        </ul>
                      </div>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Navigation;
