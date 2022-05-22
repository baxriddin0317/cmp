import React, { useEffect } from 'react'
import Li1 from "../Assets/li1.png"
import Li2 from "../Assets/li2.png"
import Li3 from "../Assets/li3.png"
import Li4 from "../Assets/li4.png"

import Aos from 'aos';
import "aos/dist/aos.css";

function List() {
      // ===== Aos scroll animation ====
        useEffect(() => {
            Aos.init({duration: 2000});
        }, [])

  return (
    <div className='container max-w-[1200px] m-auto py-[74px] px-3'>
        <ul className='flex justify-center sm:justify-around md:justify-between items-start flex-wrap' data-aos="fade-down">
            <li className='border hover:drop-shadow-xl cursor-pointer mb-[15px] border-[#E6EDF5] bg-white rounded-md p-[32px] w-[270px]'>
                <img src={Li1} alt="" className='mb-[89px]' />
                <h3 className='text-[#333] text-[24px] font-[700] mb-[18px] capitalize'>
                consulting
                </h3>
                <p className='text-[#999] text-[16px] '>
                The sky was cloudless and of a deep dark blue the spectacle before.
                </p>
            </li>
            <li className='border hover:drop-shadow-xl cursor-pointer mb-[15px] border-[#E6EDF5] bg-white rounded-md p-[32px] w-[270px]'>
                <img src={Li2} alt="" className='mb-[89px]' />
                <h3 className='text-[#333] text-[24px] font-[700] mb-[18px] capitalize'>
                Planning
                </h3>
                <p className='text-[#999] text-[16px] '>
                Apparently we had reached a great height in the atmosphere.
                </p>
            </li>
            <li className='border hover:drop-shadow-xl cursor-pointer mb-[15px] border-[#E6EDF5] bg-white rounded-md p-[32px] w-[270px]'>
                <img src={Li3} alt="" className='mb-[89px]' />
                <h3 className='text-[#333] text-[24px] font-[700] mb-[18px] capitalize'>
                Support
                </h3>
                <p className='text-[#999] text-[16px] '>
                By the same illusion which lifts the horizon of the sea to the level.
                </p>
            </li>
            <li className='border hover:drop-shadow-xl cursor-pointer mb-[15px] border-[#E6EDF5] bg-white rounded-md p-[32px] w-[270px]'>
                <img src={Li4} alt="" className='mb-[89px]' />
                <h3 className='text-[#333] text-[24px] font-[700] mb-[18px] capitalize'>
                Cooperation
                </h3>
                <p className='text-[#999] text-[16px] '>
                Spectator on a hillside, the sable cloud beneath was dished out.
                </p>
            </li>
        </ul>
    </div>
  )
}

export default List