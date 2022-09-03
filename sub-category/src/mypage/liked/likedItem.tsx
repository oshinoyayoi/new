import "./likedItem.styles.css";

type Props = {
  id: number;
  skuId: number;
  userId: number;
  skuName: string;
  img1: string;
  price: number;
};
type ItemsProps = {
  items: Props;
  deleteLike: (id: number) => void;
};

const LikedItem = ({ items, deleteLike }: ItemsProps) => {
  const { img1, id, skuId, userId, skuName, price } = items;
  return (
    <div className="item-list">
      <div className="pic">
        <img src={img1} />
      </div>
      <div className="name">{skuName}</div>
      <div className="price">
        {price}
        <span>円（税込）</span>
      </div>
      <div className="count">
        数量
        <input></input>
      </div>
      <button className="addToCartBtn" id="p-addItem" type="button">
        <i className="g-i-add-cart" aria-hidden="true">
          {" "}
          <span>カートに入れる</span>
        </i>
      </button>
    </div>
  );
};
export default LikedItem;
