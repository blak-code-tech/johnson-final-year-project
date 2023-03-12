import React from 'react'
import { useSwiper } from 'swiper/react';

const SliderNext = ({ target = ""}) => {
    const swiper = useSwiper();

    return (
        <button id={target} onClick={() => swiper.slideNext()}/>
    );
}

export default SliderNext