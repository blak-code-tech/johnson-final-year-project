import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import Image from 'next/image'
import GroceryItem from '../GroceryItem'
import SliderNext from './SliderNext'
import SliderPrev from './SliderPrev'

const MinorCategory = ({ title = "", type = "", products }) => {
    const nextBtnTarget = type + "NextBtn";
    const prevBtnTarget = type + "PrevBtn";

    return (
        <div className='w-full space-y-3 mt-10'>
            <div className='flex justify-between items-center w-[95%] mx-auto'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <div className='flex item-center justify-center space-x-2'>
                    <p>View More </p>
                    <Image src={'/images/arrow-right.svg'} alt="arrow-right" width={14} height={10} />
                </div>
            </div>
            <div className='bg-white py-5 px-3 w-[95%] mx-auto rounded-lg flex justify-between space-x-5'>
                <Image src={'/images/previous.svg'} alt="prev" width={40} height={40} onClick={() => { document.getElementById(prevBtnTarget)?.click() }} />

                <Swiper
                    freeMode={true}
                    grabCursor={true}
                    className='mySwiper'
                    modules={[FreeMode]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SliderNext target={nextBtnTarget} />
                    <SliderPrev target={prevBtnTarget} />

                    {products.map((product, index) => {
                        return (
                            <div key={index}>
                                <SwiperSlide>
                                    <GroceryItem img={product.img} stars={product.stars} price={product.price} title={product.title} weight={product.weight} />
                                </SwiperSlide>
                            </div>
                        )
                    })}

                </Swiper>

                <Image src={'/images/next.svg'} alt="next" width={40} height={40} onClick={() => { document.getElementById(nextBtnTarget)?.click() }} />

            </div>
        </div>
    )
}

export default MinorCategory