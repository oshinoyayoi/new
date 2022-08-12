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
  thumbsSwiper: any;
  setThumbsSwiper: React.Dispatch<any>;
  reviewLength: number;
};

const Review = ({
  item,
  thumbsSwiper,
  setThumbsSwiper,
  reviewLength,
}: Reviews) => {
  const {
    id,
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

  const [swiperList, setSwiperList] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const images: string[] | undefined = [img1, img2, img3, img4];
  SwiperCore.use([Pagination, Navigation]);

  const showModal = () => {
    setIsModalVisible(true);
    setSwiperList(images);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <div className={id < reviewLength ? "review-box" : "review-box-none"}>
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
          <div className="img-list">
            {/*点击弹窗 */}
            {images.map((image, index) => {
              return (
                <ul
                  className={
                    image !== null
                      ? "product-review-imgList-li"
                      : "product-review-imgList-li-none"
                  }
                  key={index}
                >
                  <img
                    className="product-review-imgList-img"
                    src={image}
                    alt="0"
                    onClick={showModal}
                  />
                </ul>
              );
            })}
          </div>

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
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {images.map((image, index) => {
                return (
                  <SwiperSlide
                    className={
                      image !== null
                        ? "product-review-imgList-li"
                        : "product-review-imgList-li-none"
                    }
                    key={index}
                  >
                    <img src={image} />
                  </SwiperSlide>
                );
              })}
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
              {images.map((image, index) => {
                return (
                  <SwiperSlide
                    className={
                      image !== null
                        ? "product-review-imgList-li"
                        : "product-review-imgList-li-none"
                    }
                    key={index}
                  >
                    <img src={image} />
                  </SwiperSlide>
                );
              })}
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
