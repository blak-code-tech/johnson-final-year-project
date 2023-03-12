import React from 'react'
import Image from 'next/image'
import Rating from '@mui/material/Rating';

const GroceryItem = ({ price, title, weight, img, stars }) => {
    const [value, setValue] = React.useState(stars);
    return (
        <div className='space-y-5 w-[250px]'>
            <div className='w-full relative flex items-center justify-center'>
                <Image src={img} width={250} className='aspect-video' height={200} alt="item" />
                <p className='text-sm absolute bottom-[-6%] right-[10%] px-2 rounded-xl bg-[#F1F1F1]'>{weight}kg</p>
            </div>
            <div className='space-y-3'>
                <div className='flex items-center justify-between mx-2'>
                    <p className='text-[16px] font-normal'>GHS {price}</p>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-black font-bold text-[15px]'>{title}</p>
                    <Image src='/images/plus.svg' width={35} height={35} alt="plus" />
                </div>
            </div>
        </div>
    )
}

export default GroceryItem