import { Fragment } from "react";
import { ReviewProps } from "../productDetail";
import { Button, Modal } from "antd";
import "./review.styles.css";
type Reviews = {
  item: ReviewProps;
};

const Review = ({ item }: Reviews) => {
  const {
    goodsName,
    reviewTitle,
    review,
    customerName,
    date,
    img1,
    img2,
    img3,
    img4,
    stars,
    great,
  } = item;

  return (
    <Fragment>
      <div className="review-box">
        <div className="top">
          <div className="stars">★★★★★</div>

          <div className="name">{customerName}さん</div>
          <div className="date">{date}</div>
        </div>
        <p className="product-name">購入商品:{goodsName}</p>
        <p className="review-tittle">{reviewTitle}</p>
        <p className="review">{review}</p>
        <div className="img">
          <img src={img1} alt="imgs" />
          <img src={img2} alt="imgs" />
        </div>
        <div className="great"> 参考になった ({great}人)</div>
      </div>
    </Fragment>
  );
};

export default Review;
