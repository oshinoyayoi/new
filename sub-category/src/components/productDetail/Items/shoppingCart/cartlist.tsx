import { Fragment, useEffect, useRef, useState } from "react";
import CartSidebar from "./cartSidebar";
import "./cartlist.styles.css";
import axios from "axios";
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

type ShoppingProps = {
  items: ItemsProps;
  deleteCart: (cartItemId: any) => void;
  setCartList: React.Dispatch<React.SetStateAction<ItemsProps[]>>;
  goodsCountRef: React.RefObject<HTMLInputElement>;
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  changeIsDeleted: (cartItemId: number) => void;
};

const CartList = ({
  items,
  deleteCart,
  setCartList,
  goodsCountRef,
  number,
  setNumber,
  changeIsDeleted,
}: ShoppingProps) => {
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
  //const isDeletedRef = useRef(0);

  //

  // const changeGoodsCount = (goodsCount: number, cartItemId: number) =>
  useEffect(() => {
    axios
      .put(
        `${"http://localhost:8080/shoppingcart"}?goodsCount=${goodsCount}&cartItemId=${cartItemId}`
      )
      .then((response) => {
        setCartList(response.data.data);
        setNumber(Number(goodsCountRef.current?.value));
      });
    //  goodsCountRef.current!.value = "1";
  }, [number]);

  const changeCount = () => {
    setNumber(Number(goodsCountRef.current?.value));
  };

  let total = price * number;

  return (
    <Fragment>
      <div className="g-itemList">
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
            <input
              className="g-input-g-input-sm-addToCartQty"
              id="cartItemId"
              type="text"
              name="quantity"
              defaultValue={goodsCount}
              onMouseOut={changeCount}
              ref={goodsCountRef}
            />
            <div className="g-price">
              <span>個別送料</span>0<span>円</span>
            </div>
          </div>
          <div className="two">
            <button className="ato" onClick={() => changeIsDeleted(cartItemId)}>
              <span>あとで買う</span>
            </button>
            <div className="g-price-g-lg-price-lg">
              <span>小計</span>
              {total}
              <span>円 （税込）</span>
            </div>
          </div>
          <div className="three">
            <div className="g-i-close" onClick={() => deleteCart(cartItemId)}>
              X <span>削除</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CartList;
