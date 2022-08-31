import axios from "axios";
import { STATUS_CODES } from "http";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartList from "../shoppingCart/cartlist";
import ShoppingCart from "../shoppingCart/shoppingCart";
import "./sideBar.styles.css";

type SideBarProps = {
  deliveryMethod: string;
  deliveryTime: string;
  deliveryImg: string;
  price: number;
  skuName: string;
  color: string;
  skuId: number;
  size: string;
  stock: number;
  img1: string;
  goodsId: string | undefined;
};

const SideBar = ({
  deliveryMethod,
  deliveryTime,
  deliveryImg,
  price,
  skuName,
  color,
  skuId,
  size,
  stock,
  img1,
  goodsId,
}: SideBarProps) => {
  const [cartList, setCartList] = useState([]);
  const goodsCountRef = useRef(1);
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");

  //添加
  let navigate = useNavigate();

  function handleClick() {
    axios
      .post("http://localhost:8080/shoppingcart", {
        userId: 1,
        goodsId: goodsId,
        goodsCount: goodsCountRef.current,
        isDeleted: 0,
        createTime: date,
        updateTime: date,
        goodsName: skuName,
        skuId: skuId,
      })
      .then((response) => {
        setCartList(response.data.data);
        console.log(response.data.resultCode);
        if (response.data.resultCode === 200) {
          navigate("/shoppingcart");
        }
      });
  }
  return (
    <div className="g-layout_sidebar">
      <div className="full-cls">
        <div className="p-order">
          <dl className="p-order-a">
            <dt>納品方法</dt>
            <dd>
              <span>{deliveryMethod}</span>
            </dd>
            <dt>配送目安</dt>
            <dd>{deliveryTime}</dd>
            <dt>返品・交換</dt>
            <dd>
              14日間返品可能
              <p className="p-order_help">
                <a className="g-link" href="/ec/userguide/cancel/">
                  <span className="changeProduct">返品・交換について</span>
                  <i className="g-i g-i-info" aria-hidden="true"></i>
                </a>
              </p>
            </dd>
            <dt>送料</dt>
            <dd>
              <span className="g-label-price">有料</span>
              <p className="p-order_help">
                <a className="g-link" href="/ec/userguide/delivery/">
                  <span className="postage">送料について</span>
                  <i className="g-i g-i-info" aria-hidden="true"></i>
                </a>
              </p>
            </dd>
          </dl>
        </div>

        <p className="deliverImg">
          <img src={deliveryImg} alt="imgs" />
        </p>
        <dl className="p-pcs">
          <dt>
            <label htmlFor="p-pieces">数量</label>
          </dt>

          <dd>
            <input
              className="g-input g-input-sm addToCartQty"
              id="p-pieces"
              type="text"
              name="quantity"
              defaultValue="1"
            />
          </dd>
        </dl>
        <div>
          <h1 className="last-price">{price}円</h1>
        </div>

        <button
          className="addToCartBtn"
          id="p-addItem"
          type="button"
          onClick={handleClick}
        >
          <i className="g-i-add-cart" aria-hidden="true">
            {" "}
            <span>カートに入れる</span>
          </i>
        </button>
      </div>
    </div>
  );
};
export default SideBar;
