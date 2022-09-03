import { Fragment } from "react";
import "./buyLatter.styles.css";
type ItemsProps = {
  cartItemId: 1;
  userId: 1;
  goodsId: 10003;
  goodsCount: 1;
  isDeleted: 0;
  createTime: string;
  updateTime: string;
  price: number;
  goodsName: string;
  color: string;
  skuId: number;
  size: string;
  stock: number;
  img1: string;
  deliveryTime: string;
};

type Props = {
  items: ItemsProps;
  deleteBuyLatter: (cartItemId: number) => void;
  changeBuyLatter: (cartItemId: number) => void;
};
const BuyLatter = ({ items, deleteBuyLatter, changeBuyLatter }: Props) => {
  const {
    cartItemId,
    userId,
    goodsId,
    goodsCount,
    isDeleted,
    createTime,
    updateTime,
    price,
    goodsName,
    color,
    skuId,
    size,
    stock,
    img1,
    deliveryTime,
  } = items;
  return (
    <Fragment>
      <div className="g-itemList-2">
        <div className="media-head">
          <img src={img1} alt="imgs" />
        </div>
        <div className="middle">
          <div className="skuid">{goodsName}</div>
          <div className="code">商品コード　{skuId}</div>
          <div className="color">カラー：{color}</div>
          <div className="size">サイズ：{size}</div>
          <div className="price">
            <div className="nor">{price}</div>円 （税込）
          </div>
          <div className="zaiku">在庫数 {stock}</div>
          <div className="chuhe">{deliveryTime}</div>
        </div>
        <div className="right">
          <div className="one">
            {" "}
            <div className="g-price">
              <span>個別送料</span>0<span>円</span>
            </div>
          </div>
          <div className="two">
            <button className="ato" onClick={() => changeBuyLatter(cartItemId)}>
              <span>カートに戻す</span>
            </button>
          </div>
          <div className="three">
            <div
              className="g-i-close"
              onClick={() => deleteBuyLatter(cartItemId)}
            >
              X <span>削除</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BuyLatter;
