import React from "react";
import { Link } from "react-router-dom";
import { GoodsProps } from "../product";
import "./goodsItem.styles.css";

type GoodsItemsProps = {
  goods: GoodsProps;
};

const GoodsItems = ({ goods }: GoodsItemsProps) => {
  const { goodsId, goodsName, sellingPrice, goodsCoverImg, colImg } = goods;

  return (
    <div key={goodsId} className="goods-list">
      <Link className="toSubCategoryList" to={`/sku/${goodsId}`}>
        <img alt={goodsName} src={goodsCoverImg} />
        <div className="godds-name">{goodsName}</div>
        <h3 className="price">{sellingPrice}円</h3>
        <li>{colImg}</li>
      </Link>
    </div>
  );
};
export default GoodsItems;
