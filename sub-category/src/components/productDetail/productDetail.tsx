import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Items from "./Items/Items";
import { useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import QAndAList from "./Items/qAndAList";
import "./productDetail.styles.css";
import Category from "../../category/category";
import Lead from "../product-list/navigation/lead.component";

export type QAndA = {
  question: string;
  questionDate: string;
  answer: string;
  answerDate: string;
  count: number;
};

export type ProductDetailProps = {
  sizeList: string[];
  colorList: string[];
  imgList: string[];
  size: string;
  color: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  colorNow: string;
  swiperBigImage: string;
  skuName: string;
};

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
          orderBy: questionDate,
          pageNum: 1,
        },
      })
      .then((response) => {
        setQAndAList(response.data.data.list);
        setCount(response.data.data.count);
      });
  }, [pageNum, goodsId, questionDate]);

  function orderBy() {
    //获取select对象
    var myItem = document.getElementById("sel") as HTMLSelectElement | null;
    //获取select中选中的那个option对象,并取得区分的on属性的值
    var myOption = myItem?.options[myItem.selectedIndex].getAttribute("on");
    //根据获取到的不同属性值，来指定不同事件
    if (myOption === "1") {
      qAndAList.sort(function (a: any, b: any) {
        return a.questionDate - b.questionDate;
      });
      setQAndAList([...qAndAList]);
    }
    if (myOption === "2") {
      qAndAList.sort(function (a: any, b: any) {
        return b.questionDate - a.questionDate;
      });
      setQAndAList([...qAndAList]);
    }
  }

  return (
    <Fragment>
      <Category />
      <Lead />
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
              color={""}
              skuName={""}
            />
          );
        })}
      </div>
      <div className="g-layou_foot">
        <div className="g-hr-g-only-lg"></div>
        <div className="g-block-sm">
          <div className="product-introduce">
            <div className="title">商品説明</div>
            <div className="product-mv-backgroud">
              <div className="product-mv">
                <div id="youtube-video" className="youtube-wrapper">
                  <div className="youtube">
                    <iframe
                      src="//www.youtube.com/embed/bY81jGaNxas?rel=0&amp;enablejsapi=1"
                      frameBorder="0"
                      data-gtm-yt-inspected-70="true"
                      id="176216654"
                      data-gtm-yt-inspected-61683982_3="true"
                      data-gtm-yt-inspected-61683982_7="true"
                      title="ゴムバンド付き敷きパッド　シングルNクールWSP n s WH S7565694 改"
                    ></iframe>
                  </div>
                </div>

                <div id="youtube_video" className="youtube-wrapper">
                  <div className="youtube">
                    <iframe
                      src="//www.youtube.com/embed/ZHl1dngSO34?rel=0&amp;enablejsapi=1"
                      frameBorder="0"
                      data-gtm-yt-inspected-69="true"
                      id="719962492"
                      title="ニトリの接触冷感 Nクールダブルスーパー～一番冷たいが長持ちする【さらさら】極冷感面と肌になじむニット面のリバーシブル～"
                      data-gtm-yt-inspected-61683982_3="true"
                      data-gtm-yt-inspected-61683982_7="true"
                    ></iframe>
                  </div>
                </div>
                <span className="text">
                  <a
                    className="blue-words"
                    href="https://www.nitori-net.jp/ec/search/?q=N%E3%82%AF%E3%83%BC%E3%83%AB%E5%AF%9D%E5%85%B7_N%E3%82%AF%E3%83%BC%E3%83%ABWSP%E3%82%82%E3%81%A3%E3%81%A8%E8%A6%8B%E3%82%8B"
                  >
                    同じNクールWスーパーの寝具をもっと見る&gt;&gt;
                  </a>
                </span>
                <div className="img-1">
                  <img
                    src="https://www.nitori-net.jp/ecstatic/include/goods/rich/7/7565681/7565681_01.jpg"
                    alt="NクールSP　さらもち"
                  />
                </div>
              </div>
              <div className="introduction">
                <div className="size">{size}サイズ</div>
                <div>【ニトリの接触冷感(Ｎクールダブルスーパー)】表生地</div>
                <div>●吸放湿わた(中わた)</div>
                <div>●抗菌防臭(表生地)</div>
                <div>●制菌加工(表生地)</div>
                <div>■組成 </div>
                <div>
                  表生地：ナイロン55％、複合繊維(ナイロン、ポリエチレン)38％、ポリウレタン7％
                </div>
                <div>不織布：レーヨン50％、ポリエステル50％(PCM加工)</div>
              </div>
            </div>
          </div>

          <div className="questionAndAnswer">
            <div className="Q&A">
              <div className="title">商品Q&A</div>
              <div className="countGoodsId">全{count}件</div>
              <select id="sel" onChange={orderBy} className="orderBy">
                <option data-on="1" value="desc">
                  おすすめ順
                </option>
                <option data-on="2" value="asc">
                  新しい順
                </option>
              </select>
              {qAndAList.map((qa, id) => {
                return <QAndAList key={id} qa={qa} />;
              })}
              <div className="countGoodsId">全{count}件</div>
            </div>
            <div className="question">
              <div className="attention">
                <div className="tittle-a">ご注意ください</div>
                <li className="att-1">
                  「ニトリ商品Q&A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
                  ニトリが不適切と判断した際、後日投稿を削除する場合が
                </li>
                <li className="att-2">
                  ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドのニトリ商品Q&Aについてをご確認ください。
                </li>
              </div>
              <input className="question-q"></input>
              <button className="add-question">質問を投稿</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
