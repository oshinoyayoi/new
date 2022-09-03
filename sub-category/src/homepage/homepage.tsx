import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "../category/category";
import Recommendation from "../mypage/recommendation/recommendation";
import "./homepage.styles.css";
import Slidershow from "./slidershow/slidershow";
const HomePage = () => {
  return (
    <div>
      <Category />
      <div className="sider-show">
        <Slidershow />
      </div>
      <div className="recommend-list">
        <div className="list-osusume">
          <Recommendation />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
