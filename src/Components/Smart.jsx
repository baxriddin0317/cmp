import React, { useEffect } from 'react'
import Imgsmart from "../Assets/imgsamart.png";
import Aos from 'aos';
import "aos/dist/aos.css";

function Smart() {
  // ===== Aos scroll animation ====
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

return (
    <div data-aos="zoom-in-down" className='container max-w-[1200px] flex items-center flex-col py-[74px] md:flex-row  px-2 m-auto justify-between'>
        <div className='w-full md:max-w-[470px]'>
            <span className='text-[#F07566] uppercase text-[16px] mb-[23px] font-bold bef'>Features</span>
            <h1 className='text-[#333] text-[40px] sm:text-[50px] md:text-left md:text-[56px] font-[700] capitalize mb-[26px]'>
                Smart Complex 
                Solutions
            </h1>
            <p className='text-[#333] text-[16px] md:text-[20px] font-[400] mb-[35px]'>
            Stars had ceased to twinkle the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.
            </p>
        </div>
        <div>
            <img src={Imgsmart} alt="rasm" />
        </div>
    </div>
  )
}

export default Smart