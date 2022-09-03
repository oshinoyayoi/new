import { Fragment } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
type SliderProps = {
  imgUrl: string;
  directUrl: string;
  imgOrder: number;
  desc1: string;
  desc2: string;
};

const Slidershow = () => {
  const [slider, setSlider] = useState([]);
  const image: string[] = [];

  useEffect(() => {
    axios
      .get("http://localhost:8080/sliderShow")
      .then((response) => setSlider(response.data.data));
  }, []);

  return (
    <Fragment>
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
        {slider.map((items: any, index) => {
          const img = items.imgUrl;
          image.push(img);
          return (
            <SwiperSlide key={index}>
              <img src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};
export default Slidershow;
