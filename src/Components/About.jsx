import React, { useEffect } from 'react'
import Imgabout from "../Assets/about.png"
import {BsCheck2Circle} from "react-icons/bs"
import Aos from 'aos';
import "aos/dist/aos.css";

function About() {
  // ===== Aos scroll animation ====
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

return (
    <div data-aos="zoom-in-down" className='container max-w-[1200px] mb-[100px] flex items-start flex-col-reverse py-[74px] md:flex-row  px-2 m-auto'>
        <div>
            <img src={Imgabout} alt="about" />
        </div>

        <div className='w-full md:max-w-[400px] mb-[20px] md:mb-[0px] ml-[0px] md:ml-[84px]'>
            <span className='text-[#F07566] uppercase text-[16px] mb-[15px] font-bold bef'>about</span>
            <h1 className='text-[#333] text-[50px] md:text-left md:text-[56px] font-[700] capitalize mb-[26px]'>
                We Build <br />
                PRO Business
            </h1>
            <p className='text-[24px] font-bold text-[#333] mb-[34px]'>
            Excited to work with customers
            </p>
            <ul className='mb-[37px] '>
                <li className='flex items-center mb-[10px] text-[#333] font-[400]'>
                    <BsCheck2Circle color='#4DB282' style={{marginRight: "5px"}} />
                    The sky was cloudless and of a deep 
                </li>
                <li className='flex items-center mb-[10px] text-[#333] font-[400]'>
                    <BsCheck2Circle color='#4DB282' style={{marginRight: "5px"}} />
                    Spectacle before us was indeed  
                </li>
                <li className='flex items-center mb-[10px] text-[#333] font-[400]'>
                    <BsCheck2Circle color='#4DB282' style={{marginRight: "5px"}} />
                    Spectacle before us was indeed  
                </li>
            </ul>
            <button className='bg-[#F07566] text-[#fff] text-[16px] uppercase py-[11px] px-[40px] rounded-md'>
                learn more
            </button>
        </div>
    </div>
  )
}

export default About