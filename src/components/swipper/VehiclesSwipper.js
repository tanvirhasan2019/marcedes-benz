import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function VehiclesSwipper({ cars }) {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            > {cars?.map((item, index) =>
                <SwiperSlide key={index} className="slider-box">
                    <p className="swipper-title-text">{item.title}</p>
                    <img className="swipper-image" src={item?.colors[0].image} alt={item?.title} />
                </SwiperSlide>
            )}
            </Swiper>
        </>
    );
}
