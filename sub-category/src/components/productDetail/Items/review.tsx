import { Fragment, useState } from "react";
import { ReviewProps } from "../productDetail";
import { Image, Modal, Space } from "antd";
import { HeartOutlined, LikeOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "./review.styles.css";
import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import SwiperCore, { Pagination, Navigation, FreeMode, Thumbs } from "swiper";
import Rating from "@mui/material/Rating";

type Reviews = {
  item: ReviewProps;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
  thumbsSwiper: any;
  setThumbsSwiper: React.Dispatch<any>;
};

const Review = ({
  item,
  showModal,
  handleOk,
  handleCancel,
  isModalVisible,
  thumbsSwiper,
  setThumbsSwiper,
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
  SwiperCore.use([Pagination, Navigation]);

  const images = [img1, img2, img3, img4];

  return (
    <Fragment>
      <div className="review-box">
        <div className="top">
          <div className="stars">
            <Rating
              name="half-rating-read"
              defaultValue={stars}
              precision={0.5}
              readOnly
            />
          </div>

          <div className="name">{customerName}さん</div>
          <div className="date">{date}</div>
        </div>
        <div className="product-name">購入商品:{goodsName}</div>
        <div className="review-tittle">{reviewTitle}</div>
        <div className="review">
          <div className="inner-box">{review}</div>
        </div>

        <div className="img">
          {/*<Image src={img1} />*/}
          <img src={img1} alt="imgs" onClick={showModal}></img>
          <img src={img2} alt="imgs" onClick={showModal}></img>
          <Modal
            className="modal"
            centered
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {" "}
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} />
              </SwiperSlide>
            </Swiper>
          </Modal>
        </div>

        <div className="great">
          <Space>
            <LikeOutlined />
          </Space>{" "}
          参考になった ({great}人)
        </div>
      </div>
    </Fragment>
  );
};

export default Review;
