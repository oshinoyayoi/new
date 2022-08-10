import React, { useState, useEffect, Fragment, ChangeEvent } from "react";
import axios from "axios";
import Items from "./Items/Items";
import { useParams } from "react-router-dom";
import "swiper/css";
import QAndAList from "./Items/qAndAList";
import "./productDetail.styles.css";
import Category from "../../category/category";
import Lead from "../product-list/navigation/lead.component";
import Review from "./Items/review";

export type QAndA = {
  question: string;
  questionDate: string;
  answer: string;
  answerDate: string;
  count: number;
  great: number;
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
export type ReviewProps = {
  goodsName: string;
  reviewTitle: string;
  review: string;
  customerName: string;
  date: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  stars: number;
  great: number;
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
  const [pageNum, setPageNum] = useState(1);
  const [count, setCount] = useState(0);
  const [orderBy, setOrderBy] = useState("id");
  const [review, setReview] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      .get(
        `${"http://localhost:8080/qAndA"}?goodsId=${goodsId}&orderBy=${orderBy}&pageNum=${pageNum}`
      )
      .then((response) => {
        setQAndAList(response.data.data.list);
        setCount(response.data.data.count);
      });
  }, [pageNum, goodsId, orderBy]);

  useEffect(() => {
    axios
      .get(`${"http://localhost:8080/skuReview"}?goodsId=${goodsId}`)
      .then((response) => {
        setReview(response.data.data);
      });
  }, [goodsId]);

  //QAndA排序
  const changeOrderBy = (event: ChangeEvent<HTMLSelectElement>): void => {
    setOrderBy(event.target.value);
  };
  //QAndA翻页
  const handlePageNum = (i: number) => {
    setPageNum(i);
  };
  const handlePageNumNext = () => {
    setPageNum(pageNum + 1);
  };
  const handlePageNumForward = () => {
    setPageNum(pageNum - 1);
  };

  const pageTotal = Math.ceil(count / 3);
  //总回复数
  var len = review.length;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
            <i className="fa-solid fa-user"></i>
            <div className="title">商品説明</div>
            <div className="product-mv-backgroud">
              <div className="block">
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
                  <div className="img-2">
                    <img
                      src="https://www.nitori-net.jp/ecstatic/include/goods/rich/7/7565681/7565681_02.jpg"
                      alt="接触冷感とは？"
                    />
                  </div>
                  <div className="good">
                    <img
                      src="https://www.nitori-net.jp/ecstatic/include/goods/rich/7/7565623s/good.jpg"
                      alt="NクールSP　さらもち"
                    />
                  </div>
                  <p className="a-word-1">「表」と「裏」のリバーシブル</p>
                  <p className="a-1">
                    夏は<span>ひんやり長続き「極冷感」</span>素材、春・秋は
                    <span>さらさら「ニット」</span>
                    素材を使い分けることで春から秋まで長くお使い頂けます。
                  </p>
                  <div className="img-3">
                    <img
                      src="https://www.nitori-net.jp/ecstatic/include/goods/rich/7/7565681/7565681_03.jpg"
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
          </div>

          <div className="questionAndAnswer">
            <div className="Q&A">
              <div className="title">商品Q&A</div>
              <div className="box-a">
                <div className="countGoodsId">全{count}件</div>
                <div className="pageChange">
                  <div
                    className="linkpage"
                    onClick={() => handlePageNumForward()}
                    style={{
                      display: pageNum !== 1 ? "inline-block" : "none",
                    }}
                  >
                    <div className="left">{"<"}</div>
                  </div>
                  <div className="p_index">
                    ページ
                    {(() => {
                      const arr = [];
                      for (let i = 1; i <= pageTotal; i++) {
                        arr.push(
                          <div
                            key={i}
                            className={pageNum === i ? "active" : undefined}
                            onClick={() => handlePageNum(i)}
                          >
                            {i}/{" "}
                          </div>
                        );
                      }
                      return arr;
                    })()}
                  </div>
                  <div
                    className="linkpage"
                    onClick={() => handlePageNumNext()}
                    style={{
                      display: pageNum !== pageTotal ? "inline-block" : "none",
                    }}
                  >
                    <div className="right">{">"}</div>
                  </div>
                </div>
                <div className="orderBy-block">
                  <select id="sel" onChange={changeOrderBy} className="orderBy">
                    <option value="question_date">おすすめ順</option>
                    <option value="answer_date">新しい順</option>
                  </select>
                </div>
              </div>
              {qAndAList.map((qa, id) => {
                return <QAndAList key={id} qa={qa} setPageNum={setPageNum} />;
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
            <div className="review">
              <div className="tittle-r">レビュー</div>
              <div className="background-a">
                <div className="review-score">
                  <div className="p-reviewScore-left">
                    <div className="a-score">総合評価</div>
                    <div className="avg-score">4.6</div>
                    ★★★★☆
                    <div className="score-number">({len})</div>
                  </div>
                  <div className="p-reviewScore-right">
                    <div className="s5">
                      <div> ★★★★★</div>
                      <div
                        className="a-meter-g-mater-visble"
                        id="js-mater5"
                        data-rate="5"
                      >
                        {""}
                        <div className="a-meter-bar">{""}</div>
                      </div>
                    </div>

                    <div className="s4">
                      <div>★★★★☆</div>{" "}
                      <div
                        className="a-meter-g-mater-visble"
                        id="js-mater5"
                        data-rate="4"
                      >
                        {""}
                        <div className="a-meter-bar">{""}</div>
                      </div>
                    </div>

                    <div className="s3">
                      <div>★★★☆☆</div>{" "}
                      <div
                        className="a-meter-g-mater-visble"
                        id="js-mater5"
                        data-rate="3"
                      >
                        {""}
                        <div className="a-meter-bar">{""}</div>
                      </div>
                    </div>

                    <div className="s2">
                      <div>★★☆☆☆</div>{" "}
                      <div
                        className="a-meter-g-mater-visble"
                        id="js-mater5"
                        data-rate="2"
                      >
                        {""}
                        <div className="a-meter-bar">{""}</div>
                      </div>
                    </div>

                    <div className="s1">
                      <div>★☆☆☆☆</div>{" "}
                      <div
                        className="a-meter-g-mater-visble"
                        id="js-mater5"
                        data-rate="1"
                      >
                        {""}
                        <div className="a-meter-bar">{""}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="p-reviw-graph-area-foot">6評価 6商品レビュー</p>
                <div id="n-review-btn" className="n-review-btn">
                  <button className="g-btn g-btn-w-sm">
                    <span>商品レビューを書く</span>
                    <i className="g-i g-i-arrow-r" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="customer-review">
                <div className="customer-review-background">
                  <p className="g-label-brand-g-reviewList_label">
                    ピックアップレビュー
                  </p>
                  {review.map((item, id) => {
                    return <Review key={id} item={item} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
