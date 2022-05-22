import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function Members() {
      // ===== Aos scroll animation ====
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <section className='mb-[150px]'>
        <div data-aos="zoom-in-down" className='bg-[#f07566] py-[79px] mb-[139px]'>
            <div className="container max-w-[1200px] m-auto">
                <div className='m-auto text-center w-[90%] md:w-[55%]'>
                    <h1 className='text-[#fff] text-[40px] sm:text-[50px] md:text-[56px] sm:font-[700] capitalize mb-[26px]'>
                        Strategy, technology
                        and design
                    </h1>
                    <p className='text-[#fff] font-[400] text-[16px]'>
                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle the same illusion which lifts the horizon of the sea.
                    </p>    
                </div>
            </div>
        </div>     
 
        <div className='container max-w-[1200px] m-auto'>
            <div className='m-auto text-center w-[90%] md:w-[65%]'>
                <span className='text-[#F07566] uppercase text-[16px] mb-[23px] font-bold bef justify-center'>portfolio</span>
                <h1 className='text-[#333] text-[40px] sm:text-[50px] md:text-[56px] sm:font-[700] capitalize mb-[26px]'>
                Strong Members
                </h1>
                <p className='text-[#333] font-[400] text-[16px]'>
                Formed a great hindrance to my speed, I resolved, contrary to my first intention, to make the being of a gigantic stature that is to say, about eight feet in height.
                </p>    
            </div>

            <ul data-aos="zoom-in-down" className='flex mt-[61px] justify-center items-center md:justify-between flex-col sm:flex-row sm:flex-wrap'>
                <li className='border-[1px] w-[90%] md:w-[370px] p-[16px] hover:shadow-2xl mb-[20px]'>
                    <div className='w-[100%] md:w-[338px] h-[338px] mb-[25px] rounded-br-[50px] rounded-[8px] overflow-hidden bg-[#E7F3ED]'>
                        <img src="" alt="" />
                    </div>

                    <h2 className="text-[24px] font-bold text-[#333] mb-[2px]">Ingo Schimpff</h2>
                    <p className="text-[#999] font-[400] text-[16px]">Manager</p>
                </li>
                <li className='border-[1px] w-[90%] md:w-[370px] p-[16px] hover:shadow-2xl mb-[20px]'>
                    <div className='w-[100%] md:w-[338px] h-[338px] mb-[25px] rounded-br-[50px] rounded-[8px] overflow-hidden bg-[#F9E3E1]'>
                        <img src="" alt="" />
                    </div>

                    <h2 className="text-[24px] font-bold text-[#333] mb-[2px]">Ingo Schimpff</h2>
                    <p className="text-[#999] font-[400] text-[16px]">Manager</p>
                </li>
                <li className='border-[1px] w-[90%] md:w-[370px] p-[16px] hover:shadow-2xl mb-[20px]'>
                    <div className='w-[100%] md:w-[338px] h-[338px] mb-[25px] rounded-br-[50px] rounded-[8px] overflow-hidden bg-[#FBF6E3]'>
                        <img src="" alt="" />
                    </div>

                    <h2 className="text-[24px] font-bold text-[#333] mb-[2px]">Ingo Schimpff</h2>
                    <p className="text-[#999] font-[400] text-[16px]">Manager</p>
                </li>
            </ul>

            <div className='flex md:justify-between mt-[248px] justify-center flex-col sm:flex-wrap sm:flex-row'>
                <h2 className='text-[32px] text-center sm:text-[36px] md:text-[40px] font-[700] mb-[30px] sm:mb-[0] capitalize'>
                Company Newsletter
                </h2>
                <form className='flex justify-center px-[20px] sm:px-[0] md:justify-between flex-col sm:flex-row '>
                    <input type="email" placeholder='your email' className=' w-[100%] border-[1px] mb-[20px] sm:mb-[0] mr-[30px] p-[11px]' />
                    <button className='py-[11px] px-[32px] text-[#fff] bg-[#f07566] uppercase'>Subscribe</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Members