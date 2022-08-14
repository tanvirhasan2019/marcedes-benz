import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";
import { carouselData } from "../../../constants/lifeStyle/Carousel"

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";

export default function LifeStyleSwipper() {
  let navigate = useNavigate()
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carouselData?.map((item, index) =>
          <SwiperSlide key={index} className="swip-slide-box">
            <div className="slide-text">
              <p className="slide-text-roboto">{item?.title}</p>
              <Link href={item?.url} underline="none">
                <Button sx={{ p: 1 }} variant="contained">Show Now</Button>
              </Link>
            </div>
            <img
              src={item?.image}
              className="slide-box-carousel"
              alt="life-style"
            />
          </SwiperSlide>
        )}

      </Swiper>
    </>
  );
}
