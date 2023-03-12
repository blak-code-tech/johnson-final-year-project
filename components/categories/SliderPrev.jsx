import React from 'react'
import { useSwiper } from 'swiper/react';

const SliderPrev = (target = "") => {
    const swiper = useSwiper();
    return (
        <button id={target.target} onClick={() => swiper.slidePrev()}/>
    );
}

export default SliderPrev