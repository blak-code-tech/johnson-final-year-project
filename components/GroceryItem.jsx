import React from 'react'
import Image from 'next/image'

const GroceryItem = ({price,title,weight,img}) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='w-[200px] h-auto relative mb-5'>
                    <Image src={img} width={200} height={200} alt="item" />
                    <p className='text-sm absolute bottom-[-10%] right-[10%] px-2 rounded-xl bg-[#F1F1F1]'>{weight}kg</p>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <div className='flex items-center justify-between mx-2'>
                        <p className='text-[16px] font-normal'>GHS {price}</p>
                    </div>
                    <div className='flex items-center justify-between mx-2'>
                        <p className='text-black font-bold text-[15px] mr-5'>{title}</p>
                        <Image src='/images/plus.svg' width={35} height={35} alt="plus" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroceryItem