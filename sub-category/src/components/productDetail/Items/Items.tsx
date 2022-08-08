import { Fragment, SetStateAction } from "react";
import "./Items.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { ProductDetailProps } from "../productDetail";

type ItemsProps = {
  items: Props;
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
};
const Items = ({
  items,
  sizeList,
  colorList,
  imgList,
  size,
  setSize,
  colorNow,
  setColor,
  swiperBigImage,
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
  } = items;

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
          <span>★★★☆☆</span>
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
            <div className="bigImg">
              <img src={img1} alt="imgs" />
            </div>

            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={img2} alt="imgs" height="100" width="100" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="imgs" height="100" width="100" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="imgs" height="100" width="100" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="imgs" height="100" width="100" />
              </SwiperSlide>
              ...
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

        <div className="g-layout_sidebar">
          <div className="full-cls">
            <div className="p-order">
              <dl className="p-order-a">
                <dt>納品方法</dt>
                <dd>
                  <span>{deliveryMethod}</span>
                </dd>
                <dt>配送目安</dt>
                <dd>{deliveryTime}</dd>
                <dt>返品・交換</dt>
                <dd>
                  14日間返品可能
                  <p className="p-order_help">
                    <a className="g-link" href="/ec/userguide/cancel/">
                      <span className="changeProduct">返品・交換について</span>
                      <i className="g-i g-i-info" aria-hidden="true"></i>
                    </a>
                  </p>
                </dd>
                <dt>送料</dt>
                <dd>
                  <span className="g-label-price">有料</span>
                  <p className="p-order_help">
                    <a className="g-link" href="/ec/userguide/delivery/">
                      <span className="postage">送料について</span>
                      <i className="g-i g-i-info" aria-hidden="true"></i>
                    </a>
                  </p>
                </dd>
              </dl>
            </div>

            <p className="deliverImg">
              <img src={deliveryImg} alt="imgs" />
            </p>
            <dl className="p-pcs">
              <dt>
                <label htmlFor="p-pieces">数量</label>
              </dt>

              <dd>
                <input
                  className="g-input g-input-sm addToCartQty"
                  id="p-pieces"
                  type="text"
                  name="quantity"
                  defaultValue="1"
                />
              </dd>
            </dl>
            <div>
              <h1 className="last-price">{price}円</h1>
            </div>

            <button className="addToCartBtn" id="p-addItem" type="button">
              <i className="g-i-add-cart" aria-hidden="true">
                {" "}
                <span>カートに入れる</span>
              </i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Items;
