import React from 'react'
import "./Hero.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { sliders } from '../../constants/Slider';

export const Hero = () => {
    return (
        <div>
            <Carousel stopOnHover={false} autoPlay={true} interval={2000} infiniteLoop={true}>
                {sliders?.map((item, index) =>
                    <div key={index}>
                        <img style={{maxHeight: '90vh'}} src={item?.imgSrc} alt="caption of heading" />
                        <p className="legend">{item?.title}</p>
                    </div>
                )}
            </Carousel>
        </div>
    )
}
