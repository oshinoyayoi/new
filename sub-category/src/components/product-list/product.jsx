import { Fragment } from "react";
import GoodsList from "../../goodslist/goodslist";
import "./product.styles.css";

const Product = () => {
  return (
    <Fragment>
      <div className="g-layout-body">
        <div className="count-and-orderby">
          <div className="p-controlbar_total">
            全<span>20</span>件
          </div>
          <div className="orderBy">おすすめ順</div>
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
