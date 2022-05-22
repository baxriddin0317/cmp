import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function Card() {
        // ===== Aos scroll animation ====
        useEffect(() => {
          Aos.init({duration: 2000});
        }, [])
  return (
    <div data-aos="zoom-in-down" className='flex border-[1px] mb-[32px] p-[16px]  md:px-[0] items-center flex-col md:flex-row hover:shadow-2xl hover:border-[transparent]'>
        <div className='w-[100%] md:w-[554px] h-[336px] rounded-[8px] rounded-br-[50px] bg-[#D8D8D8] mr-[0] md:mr-[66px]'> 
            <img src="" alt="" />
        </div>

        <div className='w-[100%] md:w-[494px] '>
            <h2 className='text-[32px] font-bold leading-[48px] mb-[29px]'>
            What looked like a small 
            patch of purple grass
            </h2>
            <p className='text-[16px] leading-[32px]'>
            Truly it was a great journey, and in it I met with many, whom to know was to love.
            </p>
        </div>
    </div>
  )
}

export default Card