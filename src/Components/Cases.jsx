import React, { useEffect } from 'react'
import Mask from "../Assets/Mask.jpg";
import Aos from 'aos';
import "aos/dist/aos.css";

// ===== images ======
import Bitmap from "../Assets/Bitmap.png";
import Bitmap2 from "../Assets/Bitmap2.png";
import Bitmap3 from "../Assets/Bitmap3.png";
import Bitmap4 from "../Assets/Bitmap4.png";
import Bitmap5 from "../Assets/Bitmap5.png";
import Bitmap6 from "../Assets/Bitmap6.png";

function Cases() {
  // ===== Aos scroll animation ====
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className='container max-w-[1200px] mb-[150px] py-[74px] px-2 m-auto'>
        <div className='m-auto text-center w-[90%] md:w-[70%] mb-[61px]'>
            <span className='text-[#F07566] uppercase text-[16px] mb-[23px] font-bold bef justify-center'>portfolio</span>
            <h1 className='text-[#333] text-[40px] sm:text-[50px] md:text-[56px] font-[700] capitalize mb-[26px]'>
                company cases
            </h1>
            <p className='text-[#999] font-[400] text-[16px]'>
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle the same illusion which lifts the horizon of the sea.
            </p>    
        </div>

        <ul className='flex flex-wrap justify-center lg:justify-between'>
          <li className='mb-[50px] pb-[3px] text-center w-[80%] md:w-[570px]' data-aos="zoom-in-down" >
            <div className='relative rounded-[8px] overflow-hidden z-0 mb-[25px]'>
              <img src={Mask} alt="mask" />
              <span className='absolute bottom-0 w-[76px] h-[76px] md:w-[96px] md:h-[96px] rounded-tr-[24px] bg-[#4DB282] flex items-center justify-center text-[#fff] text-[30px] md:text-[40px] font-bold'>01</span>
            </div>
            <h1 className='text-[24px] font-bold text-[#333] mb-[2px]'>
            Face of Mars
            </h1>
            <p className='text-[#999] font-[400] text-[16px]'>
              Will be a rare experience
            </p>
          </li>
          <li className='mb-[50px] pb-[3px] text-center w-[80%] md:w-[570px]' data-aos="zoom-in-down" >
            <div className='relative rounded-[8px] overflow-hidden z-0 mb-[25px]'>
              <img src={Mask} alt="mask" />
              <span className='absolute bottom-0 w-[96px] h-[96px] rounded-tr-[24px] bg-[#4DB282] flex items-center justify-center text-[#fff] text-[40px] font-bold'>
                02
              </span>
            </div>
            <h1 className='text-[24px] font-bold text-[#333] mb-[2px]'>
            Heavenly Bodies
            </h1>
            <p className='text-[#999] font-[400] text-[16px]'>
              Will be a rare experience
            </p>
          </li>
          <li className='mb-[50px] pb-[3px] text-center w-[80%] md:w-[570px]' data-aos="zoom-in-up">
            <div className='relative rounded-[8px] overflow-hidden z-0 mb-[25px]'>
              <img src={Mask} alt="mask" />
              <span className='absolute bottom-0 w-[96px] h-[96px] rounded-tr-[24px] bg-[#4DB282] flex items-center justify-center text-[#fff] text-[40px] font-bold'>
                03
              </span>
            </div>
            <h1 className='text-[24px] font-bold text-[#333] mb-[2px]'>
            Though the Gravity
            </h1>
            <p className='text-[#999] font-[400] text-[16px]'>
            Daily classes he no longer collapsed
            </p>
          </li>
          <li className='mb-[50px] pb-[3px] text-center w-[80%] md:w-[570px]' data-aos="zoom-in-up" >
            <div className='relative rounded-[8px] overflow-hidden z-0 mb-[25px]'>
              <img src={Mask} alt="mask" />
              <span className='absolute bottom-0 w-[96px] h-[96px] rounded-tr-[24px] bg-[#4DB282] flex items-center justify-center text-[#fff] text-[40px] font-bold'>
                04
              </span>
            </div>
            <h1 className='text-[24px] font-bold text-[#333] mb-[2px]'>
            Liberal Education
            </h1>
            <p className='text-[#999] font-[400] text-[16px]'>
            Truly it was a great journey
            </p>
          </li>
        </ul>

        <button 
        data-aos="zoom-in"
        className='uppercase text-[#F07566] hover:text-[#fff] hover:bg-[#F07566] text-[16px] font-[700] border-[#F07566] border-[1px] rounded-md py-[11px] px-[33px] block mt-[27px] mx-auto'>
          browse all
        </button>

        <div className='mt-[140px] flex flex-col sm:flex-row items-center flex-wrap justify-between px-[20px] md:px-[0px]  '>
          <img className='mt-[30px]' src={Bitmap} alt="" />
          <img className='mt-[30px]' src={Bitmap2} alt="" />
          <img className='mt-[30px]' src={Bitmap3} alt="" />
          <img className='mt-[30px]' src={Bitmap4} alt="" />
          <img className='mt-[30px]' src={Bitmap5} alt="" />
          <img className='mt-[30px]' src={Bitmap6} alt="" />
        </div>
    </div>
  )
}

export default Cases