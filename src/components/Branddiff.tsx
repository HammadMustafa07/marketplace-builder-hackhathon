import React from 'react'
import Image from 'next/image'
import truckicon from "../../public/icons/truckicon.png"
import cardicon from "../../public/icons/cardicon.png"
import flowericon from "../../public/icons/flowericon.png"
import verifyicon from "../../public/icons/verifyicon.png"

export default function Branddiff() {
  return (
    <div className='md:h-[60vh] h-[120vh] w-full bg-white'>
      <h2 className='text-[24px] text-center text-[#2A254B] mt-[5vw]'>What makes our brand different</h2>
      <div className='md:h-[124px] h-[180px] w-full flex sm:flex-col md:flex-row justify-evenly items-center mt-[5vw] flex-wrap'>
        <div className='h-full w-[266px] '>
          <Image src={truckicon} alt='' className=''></Image>
          <p className='font-[500] text-[20px] mt-[20px] text-[#2A254B]'>Next day as standard</p>
          <p className='text-[#2A254B] '>Order before 3pm and get your order
            the next day as standard</p>
        </div>
        <div className='h-full w-[266px] '>
          <Image src={verifyicon} alt='' className=''></Image>
          <p className='font-[500] text-[20px] mt-[20px] text-[#2A254B]'>Made by true artisans</p>
          <p className='text-[#2A254B] '>Handmade crafted goods made with
            real passion and craftmanship</p>
        </div>
        <div className='h-full w-[266px] '>
          <Image src={cardicon} alt='' className=''></Image>
          <p className='font-[500] text-[20px] mt-[20px] text-[#2A254B]'>Unbeatable prices</p>
          <p className='text-[#2A254B] '>For our materials and quality you
            wont find better prices anywhere

          </p>
        </div>
        <div className='h-full w-[266px] '>
          <Image src={flowericon} alt='' className=''></Image>
          <p className='font-[500] text-[20px] mt-[20px] text-[#2A254B]'>Recycled packaging</p>
          <p className='text-[#2A254B] '>We use 100% recycled packaging to
            ensure our footprint is manageable</p>
        </div>
      </div>
    </div>
  )
}
