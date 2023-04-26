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
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const navigate = useNavigate()

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
    React.useEffect(() => {
      window.addEventListener("resize", handleResize, false);
    }, []);

    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                slidesPerView={windowWidth <= 800 ? 1: 3}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            > {cars?.map((item, index) =>
                <SwiperSlide onClick={() => navigate(`/marcedes/vehicles/${item?.id}`)} key={index} className="slider-box">
                    <p className="swipper-title-text">{item.title}</p>
                    <div id="inplace-zoom-container">
                        <img id="inplace-zoom-element" className="swipper-image" src={item?.colors[0].image} alt={item?.title} />
                    </div>
                </SwiperSlide>
            )}
            </Swiper>
        </>
    );
}
