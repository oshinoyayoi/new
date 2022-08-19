import React, {
  useState,
  useEffect,
  Fragment,
  ChangeEvent,
  useRef,
} from "react";
import axios from "axios";
import Items from "./Items/Items";
import { useParams } from "react-router-dom";
import "swiper/css";
import QAndAList from "./Items/qAndAList";
import "./productDetail.styles.css";
import Category from "../../category/category";
import Lead from "../product-list/navigation/lead.component";
import Review from "./Items/review";
import { Space } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  CommentOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Rating from "@mui/material/Rating";
import ProductIntroduce from "./Items/productIntroduce";
import WriteReview from "./Items/writeReview";
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
  id: number;
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
  const initialState = {
    data: [
      {
        id: 1,
        goodsId: 10003,
        goodsName: "両面使える敷きパッド(NクールWSP n-s)",
        reviewTitle: "人生最高のシーツ！",
        review:
          "今までニトリや他社のシーツを使ってましたが、肌触りや柄は気に入っても、絶対に朝起きたらシーツが動いていて、シーツってそういうものだと思っていました。 でもこのシーツは一晩寝ても一切シワが入らないし、動かない！しかも肌触りもいい！ 若干乾きが遅いかなとは思いますが、朝洗濯すれば夕方までには乾くし、次のシーツも絶対このシリーズにします！ 何気なく買ったけど本当に、本当に最高のシーツです！",
        customerName: "みったん",
        date: "2022/05/18",
        stars: 4,
        great: 72,
        img1: "https://p1-a50ece1c.imageflux.jp/c/f=webp:jpeg,w=1024,h=1024,a=0/store/reviewattachmentfile/53/12656/file/9872323fc3a9f41d65df69f6c308f4d2.jpg",
        img2: "https://p1-a50ece1c.imageflux.jp/c/f=webp:jpeg,w=1024,h=1024,a=0/store/reviewattachmentfile/53/4280/file/057997d402a99d2ba718c718266980dc.jpg",
        img3: "",
        img4: "",
      },
      {
        id: 2,
        goodsId: 10003,
        goodsName: "両面使える敷きパッド(NクールWSP n-s)",
        reviewTitle: "予想どうりの",
        review:
          "連日の暑さでクタクタになっても布団に転がった瞬間ひんやり気持ちいいです。朝まで続くわけじゃないけど寝る前のひととき、 快適に過ごせます。",
        customerName: "翔太まる",
        date: "2022/01/05",
        stars: 5,
        great: 72,
        img1: "https://p1-a50ece1c.imageflux.jp/c/f=webp:jpeg,w=1024,h=1024,a=0/store/reviewattachmentfile/53/5056/file/14fe2e5f6b8ebde642ac9b5941519c84.jpg",
        img2: "",
        img3: "",
        img4: "",
      },
      {
        id: 6,
        goodsId: 10003,
        goodsName: "両面使える敷きパッド(NクールWSP n-s)",
        reviewTitle: "使いやすい。",
        review:
          "軽くて乾きやすくて、使いやすいです。夏本当に暑いので、ソファーに掛けて使ったりもしてます。",
        customerName: "aya",
        date: "2021/08/08",
        stars: 5,
        great: 72,
        img1: "",
        img2: "",
        img3: "",
        img4: "",
      },
    ],
  };

  const [product, setProduct] = useState([]);
  const param = useParams();
  const [colorList, setColorList] = useState([]);
  const [sizeList, setSizeList] = useState([]);

  const goodsId = param.goodsId;
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const [qAndAList, setQAndAList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [count, setCount] = useState(0);
  const [orderBy, setOrderBy] = useState("id");
  const [review, setReview] = useState(initialState.data);
  const questionRef = useRef<HTMLInputElement>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [reviewLength, setReviewLength] = useState(4);
  const reviewTitleRef = useRef<HTMLTextAreaElement>(null);
  const reviewRef = useRef<HTMLTextAreaElement>(null);
  const customerNameRef = useRef<HTMLTextAreaElement>(null);
  const goodsNameRef = useRef<HTMLTextAreaElement>(null);
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
  }, [pageNum, goodsId, orderBy, questionRef]);

  //add question
  const d: Date = new Date();
  let date = d.toLocaleDateString();

  function addQuestion() {
    axios
      .post("http://localhost:8080/qAndA/insert", {
        goodsId: goodsId,
        question: questionRef.current!.value,
        questionDate: date,
        great: 0,
      })
      .then((response) => {
        setQAndAList(response.data);
      })
      .then(() => {
        alert("add question succeed!");
      });
    questionRef.current!.value = "";
  }

  useEffect(() => {
    axios
      .get(`${"http://localhost:8080/skuReview"}?goodsId=${goodsId}`)
      .then((response) => {
        setReview(response.data.data);
      });
  }, [goodsId, reviewRef]);

  function addReview() {
    axios
      .post("http://localhost:8080/skuReview/insert", {
        goodsId: goodsId,
        goodsName: "両面使える敷きパッド(NクールWSP n-s)",
        reviewTitle: reviewTitleRef.current!.value,
        review: reviewRef.current!.value,
        customerName: customerNameRef.current!.value,
        date: date,
        stars: 5,
        great: 0,
      })
      .then((response) => {
        setReview(response.data);
      })
      .then(() => {
        alert("add review succeed!");
      });
    reviewTitleRef.current!.value = "";
    reviewRef.current!.value = "";
    customerNameRef.current!.value = "";
  }

  //QAndA排序
  const changeOrderBy = (event: ChangeEvent<HTMLSelectElement>): void => {
    setOrderBy(event.target.value);
    //点击排序后初始化页数
    setPageNum(1);
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
  //antd modal

  //

  const handleReviewMore = () => {
    if (count > 3) {
      setReviewLength(count + 1);
      /* setReview([...review]);*/
    }
  };

  //👇️startlist
  let starList = [0, 0, 0, 0, 0];
  for (var i = 0; i < review.length; i++) {
    starList[review[i].stars - 1]++;
  }
  //反转顺序
  starList.reverse();

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
              size={size}
              setSize={setSize}
              colorNow={color}
              setColor={setColor}
            />
          );
        })}
      </div>
      <div className="g-layou_foot">
        <div className="g-hr-g-only-lg"></div>
        <div className="g-block-sm">
          <ProductIntroduce size={size} />

          <div className="questionAndAnswer">
            <div className="Q&A">
              <div className="title">
                <Space className="icon">
                  <CommentOutlined />
                </Space>
                商品Q&A
              </div>
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
                    <div className="left">
                      <Space>
                        <LeftOutlined />
                      </Space>
                    </div>
                  </div>
                  <div className="p_index">
                    ページ{pageNum}/{pageTotal}
                    {(() => {
                      const arr = [];
                      for (let i = 1; i <= pageTotal; i++) {
                        arr.push(
                          <div
                            key={i}
                            className={pageNum === i ? "active" : undefined}
                            onClick={() => handlePageNum(i)}
                          ></div>
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
                    <div className="right">
                      <Space>
                        <RightOutlined />
                      </Space>
                    </div>
                  </div>
                </div>
                <div className="orderBy-block">
                  <select id="sel" onChange={changeOrderBy} className="orderBy">
                    <option value="question_date">おすすめ順</option>
                    <option value="answer_date">新しい順</option>
                  </select>
                </div>
              </div>
              {Array.isArray(qAndAList)
                ? qAndAList.map((qa, id) => {
                    return (
                      <QAndAList key={id} qa={qa} setPageNum={setPageNum} />
                    );
                  })
                : null}
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
              <input
                type="textbox"
                id="ZVQuestionTextarea"
                className="zv-textbox"
                placeholder="不明な点を質問（例：この製品には耐久性がありますか？）"
                ref={questionRef}
              />
              <div className="add-question-background">
                <button className="add-question" onClick={addQuestion}>
                  質問を投稿
                </button>
              </div>
            </div>
            <div className="review">
              <div className="tittle-r">レビュー</div>
              <div className="background-a">
                <div className="review-score">
                  <div className="p-reviewScore-left">
                    <div className="a-score">総合評価</div>
                    <div className="avg-score">4.6</div>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.6}
                      precision={0.1}
                      readOnly
                    />
                    <div className="score-number">({len})</div>
                  </div>
                  <div className="p-reviewScore-right">
                    {starList.map((star, index) => {
                      return (
                        <div key={index} className="review-graph-row-container">
                          <Rating
                            name="read-only"
                            value={5 - index}
                            size="small"
                            readOnly
                          />
                          <div className="meter-visible-bar">
                            <div
                              className="meter-bar"
                              style={{
                                width: `${Math.trunc(
                                  (star / review.length) * 100
                                )}%`,
                              }}
                            ></div>
                          </div>
                          <p className="review-score-num">{star}人</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className="p-reviw-graph-area-foot">
                  {count}評価 {count}商品レビュー
                </p>

                {product.map((items, index) => {
                  return (
                    <WriteReview
                      key={index}
                      items={items}
                      reviewTitleRef={reviewTitleRef}
                      reviewRef={reviewRef}
                      customerNameRef={customerNameRef}
                      goodsNameRef={goodsNameRef}
                      addReview={addReview}
                    />
                  );
                })}
              </div>
              <div className="customer-review">
                <div className="customer-review-background">
                  <p className="g-label-brand-g-reviewList_label">
                    ピックアップレビュー
                  </p>
                  {Array.isArray(review)
                    ? review.map((item, id) => {
                        return (
                          <Review
                            key={id}
                            item={item}
                            thumbsSwiper={thumbsSwiper}
                            setThumbsSwiper={setThumbsSwiper}
                            reviewLength={reviewLength}
                          />
                        );
                      })
                    : null}
                  );
                  <div
                    className={
                      count + 1 !== reviewLength
                        ? "reviewMore"
                        : "reviewMore-none"
                    }
                  >
                    <div className="button-background">
                      <Space>
                        {" "}
                        <DownOutlined />{" "}
                      </Space>

                      <button
                        className="button"
                        onClick={() => handleReviewMore()}
                      >
                        レビューをもっと見る(3/{count})
                      </button>
                    </div>
                  </div>
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
