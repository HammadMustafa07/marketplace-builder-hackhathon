import Image from 'next/image'
import React from 'react'
import Rightimage from "../../public/images/RightImage.png"

export default function Hero() {
  return (
    <div className='mt-[20px] w-[100vw] flex items-center justify-center flex-wrap'>
      <div className='bg-[#2a254b] h-[100vw] md:h-[94vh] flex w-full md:w-[50vw] flex-col justify-around flex-wrap'>
        <p className='text-white ml-[20px] text-[22px] md:text-[32px]'>The furniture brand for the future, <br /> with timeless designs</p>
        <button className='h-[50px] ml-[20px] w-[140px] bg-[#494465]'><p className='text-white'>View Collection</p></button>
        <p className='text-[19px] ml-[20px]  text-[#e0e0e0]'>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
      </div>
      <div>
        <Image src={Rightimage} alt='' className='h-[65vh] md:h-[94vh]'></Image>
      </div>
    </div>
  )
}
