import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";
import Category from "../../../../category/category";
import Lead from "../../../product-list/navigation/lead.component";
import BuyLatter from "./buyLatter";

import CartList from "./cartlist";
import CartSidebar from "./cartSidebar";
import "./shoppingCart.styles.css";

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

const ShoppingCart = () => {
  const [cartList, setCartList] = useState<ItemsProps[]>([]);
  const goodsCountRef = useRef<HTMLInputElement>(null);
  const [number, setNumber] = useState(1);
  const [cartAfter, setCartAfter] = useState([]);

  let userId = 1;
  useEffect(() => {
    axios
      .get(`${"http://localhost:8080/shoppingcart"}?userId=${userId}`)
      .then((response) => {
        setCartList(response.data.data);
      });
  }, [goodsCountRef, number, userId]);

  useEffect(() => {
    axios.get("http://localhost:8080/buyLatter").then((response) => {
      setCartAfter(response.data.data);
    });
  }, [cartList]);

  //删除商品
  const deleteCart = (cartItemId: number) => {
    axios
      .delete(`${"http://localhost:8080/shoppingcart"}/${cartItemId}`)
      .then((response) => {
        setCartList(response.data.data);
        if (response.data.resultCode === 200) {
          alert("Deleted remove succeed!");
        }
      });
  };

  const deleteBuyLatter = (cartItemId: number) => {
    axios
      .delete(`${"http://localhost:8080/buyLatter"}/${cartItemId}`)
      .then((response) => {
        setCartAfter(response.data.data);
        if (response.data.resultCode === 200) {
          alert("Deleted remove succeed!");
        }
      });
  };

  //修改isDeleted
  const changeIsDeleted = (cartItemId: number) => {
    axios
      .put(
        `${"http://localhost:8080/shoppingcart/newList"}?cartItemId=${cartItemId}`
      )
      .then((response) => {
        setCartList(response.data.data);
      });
  };
  //修改isDeleted
  const changeBuyLatter = (cartItemId: number) => {
    axios
      .put(
        `${"http://localhost:8080/buyLatter/newList"}?cartItemId=${cartItemId}`
      )
      .then((response) => {
        setCartAfter(response.data.data);
      });
  };
  // console.log(cartAfter);

  //total price
  let sum = 0;
  const map = cartList.map((x: ItemsProps, index) => {
    const {
      cartItemId,
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
    } = x;
    sum += x.price * goodsCount;
    return sum;
  });

  return (
    <Fragment>
      <div className="category">
        <Category />
      </div>

      <div className="main-background">
        <div className="background">
          <div className="yCmsContentSlot"></div>
          <div className="main__inner-wrapper">
            <Lead />
            カート
            <div className="g-bodyArea-g-inner">
              <div className="g-layout_head">
                <h1>カート</h1>
              </div>
              <ul className="g-layout_body">
                {Array.isArray(cartList)
                  ? cartList.map((items, cartItemId) => {
                      return (
                        <CartList
                          key={cartItemId}
                          items={items}
                          deleteCart={deleteCart}
                          setCartList={setCartList}
                          goodsCountRef={goodsCountRef}
                          number={number}
                          setNumber={setNumber}
                          changeIsDeleted={changeIsDeleted}
                        />
                      );
                    })
                  : null}
              </ul>
            </div>
          </div>
          <div className="side-bar">
            <CartSidebar sum={sum} />{" "}
          </div>
        </div>
        <div className="buy-latter">
          <div className="buy-latter-background">
            <div className="buy-latter-title">
              「あとで買う」に入っている商品
            </div>
            <ul className="g-layout_body">
              {Array.isArray(cartAfter)
                ? cartAfter.map((items: ItemsProps, cartItemId) => {
                    return (
                      <BuyLatter
                        key={cartItemId}
                        items={items}
                        deleteBuyLatter={deleteBuyLatter}
                        changeBuyLatter={changeBuyLatter}
                      />
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShoppingCart;
