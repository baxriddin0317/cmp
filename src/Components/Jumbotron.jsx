import React from 'react'
import Jumbot from "../Assets/jumbotron.png";

function Jumbotron() {
  return (
    <div data-aos="zoom-in-up" className='container max-w-[1200px] flex items-center flex-col py-[74px] md:flex-row  px-2 m-auto justify-between'>
        <div className='w-full md:max-w-[470px]' >
            <span className='text-[#F07566] uppercase text-[16px] mb-[23px] font-bold bef'>company</span>
            <h1 className='text-[#333] text-[50px] text-center md:text-left sm:text-[64px] md:text-[72px] font-[700] capitalize mb-[38px]'>
                creative <span className='text-[#4DB282] title__span'>marketing</span>
            </h1>
            <p className='text-[#333] text-[20px] font-[400] mb-[35px]'>
            The sky was cloudless and of a deep dark blue the spectacle before us was indeed sublime.
            </p>
            <button className='bg-[#F07566] text-[#fff] text-[16px] uppercase py-[11px] px-[40px] rounded-md'>
                explore
            </button>
        </div>
        <div>
            <img src={Jumbot} alt="rasm" />
        </div>
    </div>
  )
}

export default Jumbotron