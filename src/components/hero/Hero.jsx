import React from "react";
import heroimg from "../../assets/heroimg.png";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/hero__img3.png";

import "swiper/css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="max__container">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero__start">
              <h1 className="hero__start-title">
                Скидка 15% на все подвесные светильники
                <p className="hero__start-text">до 5 февраля</p>
              </h1>
              <img src={heroimg} alt="Hero" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__start">
              <h1 className="hero__start-title">
                Скидка 15% на все подвесные светильники
                <p className="hero__start-text">до 5 февраля</p>
              </h1>
              <img className="hero__start-img" src={img1} alt="Hero 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__start">
              <h1 className="hero__start-title">
                Скидка 15% на все подвесные светильники
                <p className="hero__start-text">до 5 февраля</p>
              </h1>
              <img src={heroimg} alt="Hero 2" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
