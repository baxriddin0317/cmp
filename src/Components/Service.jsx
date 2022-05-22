import React, { useEffect, useState } from 'react'
import Imgsmart from "../Assets/imgsamart.png";
import Aos from 'aos';
import "aos/dist/aos.css";
import { CgUserList } from "react-icons/cg"
import { ImStatsDots } from "react-icons/im";
import CountUp from 'react-countup';

function Service() {
  // ===== Aos scroll animation ====
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  const [ countB, setCountB ] = useState(false);

  window.addEventListener("scroll", () => {
    if(window.scrollY > 5000){
      setCountB(true);
    }else{
      setCountB(false);
    }
  })

  return (
    <section className='container max-w-[1200px] flex items-start flex-col py-[74px] md:flex-row  px-2 m-auto justify-between'>
        <div className='w-full md:max-w-[470px] mb-[50px] md:mb-[0px]' data-aos="fade-up">
            <span className='text-[#F07566] uppercase text-[16px] mb-[23px] font-bold bef'>service</span>
            <h1 className='text-[#333] text-[40px] sm:text-[50px] md:text-left md:text-[56px] font-[700] capitalize mb-[26px]'>
            Marketing and
            Creative Consulting
            </h1>
            <p className='text-[#333] text-[16px] md:text-[20px] font-[400] mb-[35px]'>
            Distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture.
            </p>

            <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex items-center w-[180px] justify-between mb-[30px] sm:mb-[0]'>
                    <CgUserList size={56} />
                    <div>
                      <h2 className='font-bold text-[40px] text-[#333]'>
                        {countB ? <CountUp end={43} duration={3} /> : 0} +
                      </h2>
                      <p className='capitalize text-[16px] text-[#999]'>
                        clients
                      </p>
                    </div>
                </div>
                <div className='flex items-center sm:ml-auto w-[180px] justify-between'>
                    <ImStatsDots size={56} />
                    <div>
                      <h2 className='font-bold text-[#333] text-[32px] sm:text-[36px] md:text-[40px]'>
                        {countB ? <CountUp end={75} duration={3} /> : 0} %
                      </h2>
                      <p className='capitalize text-[16px] text-[#999]'>
                        succeful
                      </p>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-down">
            <img src={Imgsmart} alt="rasm" />
        </div>
    </section>
  )
}

export default Service;