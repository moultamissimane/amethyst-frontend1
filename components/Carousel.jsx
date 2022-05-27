import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { EffectCoverflow, Pagination } from "swiper";

export const Carousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        style={{ height: 600, width: 900 }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video className="rounded-lg"
          style={{ height: 600, width: 900 }}
            autoPlay
            loop
            muted
            src="/images/pexels-ekaterina-bolovtsova-6768265.mp4" />
        </SwiperSlide>
        <SwiperSlide>
          <video className="rounded-lg"
          style={{ height: 600, width: 900 }}
            autoPlay
            loop
            muted
            src="/images/productionID_4462350.mp4" />
        </SwiperSlide>
        
        <SwiperSlide>
          <video className="rounded-lg"
          style={{ height: 600, width: 900 }}
            autoPlay
            loop
            muted
            src="/images/productionID_4063585.mp4" />
        </SwiperSlide>
        <SwiperSlide>
          <video className="rounded-lg"
          style={{ height: 600, width: 900 }}
            autoPlay
            loop
            src="/images/productionID_5197762compressed.mp4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
