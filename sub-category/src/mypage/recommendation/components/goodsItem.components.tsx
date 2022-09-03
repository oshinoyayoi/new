import "./goodsItem.style.css";
type Props = {
  items: itemProps;
};
type itemProps = {
  goodsId: number;
  goodsName: string;
  sellingPrice: number;
  goodsCoverImg: string;
};
const GoodsItem = ({ items }: Props) => {
  const { goodsId, goodsName, sellingPrice, goodsCoverImg } = items;

  return (
    <div key={goodsId} className="goods-list">
      <img alt={goodsName} src={goodsCoverImg} />
      <div className="muji-goodsname">{goodsName}</div>
      <div className="muji-price">{sellingPrice}円</div>
    </div>
  );
};
export default GoodsItem;
