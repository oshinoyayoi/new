import "./goodsItem.styles.css";

const GoodsItems = ({ goods }) => {
  const { goodsId, goodsName, sellingPrice, goodsCoverImg } = goods;
  return (
    <div key={goodsId} className="goods-list">
      <img alt={goodsName} src={goodsCoverImg} />
      <div className="godds-name">{goodsName}</div>
      <h3 className="price">{sellingPrice}円</h3>
    </div>
  );
};
export default GoodsItems;
