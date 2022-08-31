import { Fragment, SetStateAction, useState } from "react";
import "./Items.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Rating from "@mui/material/Rating";
import { FreeMode, Navigation, Thumbs } from "swiper";
import SideBar from "./sidebar/sidebar";

type ItemsProps = {
  items: Props;
  sizeList: string[];
  colorList: string[];
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  colorNow: string;
  goodsId: string | undefined;
};

type Props = {
  skuName: string;
  color: string;
  colorImg: string;
  skuId: number;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
  catchcopy: string;
  price: number;
  point: number;
  featureIcon1: string;
  featureIcon2: string;
  featureIcon3: string;
  featureIcon4: string;
  sizeDetail: string;
  material: string;
  weight: string;
  warranty: string;
  deliveryMethod: string;
  deliveryTime: string;
  deliveryImg: string;
  stock: number;
};
const Items = ({
  items,
  sizeList,
  colorList,
  size,
  setSize,
  colorNow,
  setColor,
  goodsId,
}: ItemsProps) => {
  const {
    skuName,
    color,
    colorImg,
    skuId,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    catchcopy,
    price,
    point,
    featureIcon1,
    featureIcon2,
    featureIcon3,
    featureIcon4,
    sizeDetail,
    material,
    weight,
    warranty,
    deliveryMethod,
    deliveryTime,
    deliveryImg,
    stock,
  } = items;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const selectSize = (event: { target: { value: SetStateAction<string> } }) => {
    setSize(event.target.value);
  };
  const selectColor = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setColor(event.target.value);
  };
  /* const handleSwiper = (image) => {
    setSwiperBigImage(image);
  };
*/

  return (
    <Fragment>
      <div className="g-layout_head">
        <h1 className="skuName">{skuName}</h1>
        <div className="g-lead g-lg">
          <span className="skuId">商品コード {skuId}</span>
        </div>
        <p className="product-reviews">
          <span>
            {" "}
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </span>
          <span>(102)</span>
        </p>
        <p className="labelSet">
          <img
            src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8992484163614/icon_douga.png"
            alt=""
          />
        </p>
      </div>

      <div className="backGround">
        <div className="g-layout_body">
          <div className="productImg">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
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
              /*
              slidesPerGroup={4}
              grid={{
                rows: 2,
              }}
              */
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
          </div>

          <div className="sku-details">
            <div className="units-lg">
              <div className="sizeAndColor">
                <div>サイズ：{size}</div>
                <dd>
                  <select className="sizeSelect" onChange={selectSize}>
                    {sizeList.map((size, index) => {
                      return (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      );
                    })}
                  </select>
                </dd>
                <div>カラー：{color}</div>
                <div className="colorAndImg">
                  {colorList.map((colors, index) => {
                    return (
                      <ul key={index}>
                        <input
                          type="radio"
                          checked={colors === colorNow}
                          value={colors}
                          onChange={selectColor}
                        />
                        <span className="colorImgs">
                          <img src={colorImg} alt="imgs" />
                        </span>
                      </ul>
                    );
                  })}
                </div>
              </div>

              <div className="catchCopy">{catchcopy}</div>
              <div className="priceAndPoint">
                <div className="price">
                  <h1>{price} 円</h1>
                </div>
                <div className="pointGet">
                  獲得ポイント
                  <div className="point">{point} pt</div>
                  付与
                </div>
              </div>
            </div>

            <div className="block-a"></div>

            <section className="g-details">
              <h2>
                <span>仕様・サイズ</span>
              </h2>
              <div className="product-propertys">
                <ul className="icons">
                  <img src={featureIcon1} alt="imgs" />
                  <img src={featureIcon2} alt="imgs" />
                  <img src={featureIcon3} alt="imgs" />
                  <img src={featureIcon4} alt="imgs" />
                </ul>
              </div>
              <table className="specMore">
                <tbody>
                  <tr>
                    <th>商品コード</th>
                    <td>{skuId}</td>
                  </tr>
                  <tr>
                    <th>カラー</th>
                    <td>{color}</td>
                  </tr>
                  <tr>
                    <th>サイズ</th>
                    <td>{sizeDetail}</td>
                  </tr>
                  <tr>
                    <th>素材</th>
                    <td>{material}</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>{weight}</td>
                  </tr>
                  <tr>
                    <th>保証年数</th>
                    <td>{warranty}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>

        <div className="sidebar">
          <SideBar
            deliveryMethod={deliveryMethod}
            deliveryTime={deliveryTime}
            deliveryImg={deliveryImg}
            price={price}
            skuName={skuName}
            color={color}
            skuId={skuId}
            size={size}
            stock={stock}
            img1={img1}
            goodsId={goodsId}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Items;
//module.exports={Items};
