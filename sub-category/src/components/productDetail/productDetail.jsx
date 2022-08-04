import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Items from "./Items/Items";
import { useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import QAndAList from "./Items/qAndAList";
import "./productDetail.styles.css";
const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const param = useParams();
  const [colorList, setColorList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [imgList, setImgList] = useState([]);
  const goodsId = param.goodsId;
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [swiperBigImage, setSwiperBigImage] = useState("");
  const [qAndAList, setQAndAList] = useState([]);
  const [pageNum, setPageNum] = useState();
  const [count, setCount] = useState();
  const [questionDate, setQuestionDate] = useState([]);
  useEffect(() => {
    axios
      .get(`${"http://localhost:8080/sku"}?goodsId=${goodsId}`, {
        params: {
          size: size,
          color: color,
        },
      })
      .then((response) => {
        setProduct(response.data.data.voList);
        setSizeList(response.data.data.sizeList);
        setColorList(response.data.data.colorList);
        setImgList(response.data.data.voList.images);
      });
  }, [goodsId, size, color]);
  useEffect(() => {
    axios
      .get(`${"http://localhost:8080/qAndA"}?goodsId=${goodsId}`, {
        params: {
          pageNum: 1,
        },
      })
      .then((response) => {
        setQAndAList(response.data.data.list);
        setCount(response.data.data.count);
      });
  }, [pageNum, goodsId]);

  function orderBy() {
    //获取select对象
    var myItem = document.getElementById("sel");
    //获取select中选中的那个option对象,并取得区分的on属性的值
    var myOption = myItem.options[myItem.selectedIndex].getAttribute("on");
    //根据获取到的不同属性值，来指定不同事件
    if (myOption === "1") {
      qAndAList.sort(function (a, b) {
        return a.questionDate - b.questionDate;
      });
      setQAndAList([...qAndAList]);
    }
    if (myOption === "2") {
      qAndAList.sort(function (a, b) {
        return b.questionDate - a.questionDate;
      });
      setQAndAList([...qAndAList]);
    }
  }

  return (
    <Fragment>
      <div className="details-a">
        {product.map((items, index) => {
          return (
            <Items
              key={index}
              items={items}
              sizeList={sizeList}
              colorList={colorList}
              imgList={imgList}
              size={size}
              setSize={setSize}
              colorNow={color}
              setColor={setColor}
              swiperBigImage={swiperBigImage}
              setSwiperBigImage={setSwiperBigImage}
            />
          );
        })}
      </div>

      <div className="questionAndAnswer">
        <div className="title">
          <div className="countGoodsId">全{count}件</div>
          <select id="sel" onChange={orderBy} className="orderBy">
            <option on="1" value="questionDateAsc">
              おすすめ順
            </option>
            <option on="2" value="questionDate">
              新しい順
            </option>
          </select>
        </div>

        {qAndAList.map((qa, id) => {
          return (
            <QAndAList
              key={id}
              qa={qa}
              count={count}
              setPageNum={setPageNum}
              pageNum={pageNum}
              questionDate={questionDate}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductDetail;
