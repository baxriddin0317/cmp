import React, { useEffect } from 'react'
import Card from './Card'
import Aos from 'aos';
import "aos/dist/aos.css";

function Check() {
      // ===== Aos scroll animation ====
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <section className='container max-w-[1200px] m-auto mt-[50px] mb-[120px] px-[10px]'>
        <div className='m-auto text-center w-[90%] md:w-[65%] mb-[61px]'>
            <span className='text-[#F07566] uppercase text-[16px] mb-[23px] font-bold bef justify-center'> 
                Latest articles
            </span>
            <h1 className='text-[#333] text-[40px] sm:text-[50px] md:text-[56px] sm:font-[700] capitalize mb-[26px]'>
                Check Our Insights
            </h1>
            <p className='text-[#333] font-[400] text-[16px]'>
                See the face of Mars, anyhow, and that will be a rare experience seems to me that a view of the heavenly bodies through a fine telescope, as well as a tour round the world.
            </p>    
        </div>

        <Card />

        <ul data-aos="zoom-in-down" className='flex justify-center items-center mb-[60px] md:justify-between flex-col sm:flex-row sm:flex-wrap'>
            <li className='border-[1px] w-[100%] sm:w-[370px] p-[16px] mb-[30px] hover:shadow-2xl hover:border-[transparent]'>
                <div className='w-[100%] sm:w-[338px] h-[240px] mb-[25px] rounded-br-[50px] rounded-[8px] overflow-hidden bg-[#d8d8d8]'>
                    <img src="" alt="" />
                </div>

                <h2 className="text-[24px] font-bold text-[#333] mb-[2px]">
                Above five feet square, was moving across
                </h2>
            </li>
            <li className='border-[1px] w-[100%] sm:w-[370px] p-[16px] mb-[30px] hover:shadow-2xl hover:border-[transparent]'>
                <div className='w-[100%] sm:w-[338px] h-[240px] mb-[25px] rounded-br-[50px] rounded-[8px] overflow-hidden bg-[#d8d8d8]'>
                    <img src="" alt="" />
                </div>

                <h2 className="text-[24px] font-bold text-[#333] mb-[2px]">
                Enough he perceived that it was not grass
                </h2>
            </li>
            <li className='border-[1px] w-[100%] sm:w-[370px] p-[16px] mb-[30px] hover:shadow-2xl hover:border-[transparent]'>
                <div className='w-[100%] sm:w-[338px] h-[240px] mb-[25px] rounded-br-[50px] rounded-[8px] overflow-hidden bg-[#d8d8d8]'>
                    <img src="" alt="" />
                </div>

                <h2 className="text-[24px] font-bold text-[#333] mb-[2px]">
                There were no blades, but only purple roots
                </h2>
            </li>
        </ul>

        <button 
        data-aos="zoom-in"
        className='uppercase text-[#F07566] hover:text-[#fff] hover:bg-[#F07566] text-[16px] font-[700] border-[#F07566]  border-[1px] rounded-md py-[11px] px-[33px] block mt-[27px] mx-auto'>
          browse all
        </button>
    </section>
  )
}

export default Check