import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "../category/category";
import "./homepage.styles.css";
const HomePage = () => {
  return (
    <div>
      <Category />
      <div className="sider-show">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide data-hash="slide1">
            <img src="https://www.nitori-net.jp/ecstatic/include/feature/img22/utsuwa/nKanban_pc.jpg" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide2">
            {" "}
            <img src="https://www.nitori-net.jp/ecstatic/include/feature/img22/decohome/nCnt-autumn.jpg" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide3">
            {" "}
            <img
              src="https://www.nitori-net.jp/ecstatic/include/feature/img21/uchisoto/nKanban_slick05_pc.jpg
"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide4">
            {" "}
            <img
              src="https://www.nitori-net.jp/ecstatic/include/feature/img22/storageidea/nKanban_pc.jpg
"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide5">
            {" "}
            <img src="https://www.nitori-net.jp/ecstatic/include/feature/img22/utsuwa/nKanban_pc.jpg" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide6">
            {" "}
            <img src="https://www.nitori-net.jp/ecstatic/include/feature/img22/utsuwa/nKanban_pc.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default HomePage;
