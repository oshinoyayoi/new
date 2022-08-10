import { Fragment } from "react";
import { ReviewProps } from "../productDetail";
import { Image } from "antd";
import "./review.styles.css";
import "antd/dist/antd.css";
type Reviews = {
  item: ReviewProps;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
};

const Review = ({
  item,
  showModal,
  handleOk,
  handleCancel,
  isModalVisible,
}: Reviews) => {
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
        <p className="review">
          <div className="inner-box">{review}</div>
        </p>
        <div className="img">
          <Image src={img1} />
        </div>
        <div className="great"> 参考になった ({great}人)</div>
      </div>
    </Fragment>
  );
};

export default Review;
