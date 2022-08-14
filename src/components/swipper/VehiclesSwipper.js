import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

export default function VehiclesSwipper({ cars }) {
    const navigate = useNavigate()
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
                <SwiperSlide onClick={()=>navigate(`/marcedes/vehicles/${item?.id}`)} key={index} className="slider-box">
                    <p className="swipper-title-text">{item.title}</p>
                    <img className="swipper-image" src={item?.colors[0].image} alt={item?.title} />
                </SwiperSlide>
            )}
            </Swiper>
        </>
    );
}
