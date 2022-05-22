import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className='bg-[#333] pt-[76px]'>
        <div className="container max-w-[1200px] m-auto">
            <div className='flex mb-[179px] w-[100%] sm:mb-[69px] px-[16px] relative'>
                <Link to="#" className='text-[40px] mr-[80px]  sm:mr-[233px] font-bold text-[#fff]'>CMP</Link>

                <ul className='flex items-start mt-[25px] w-[100%] flex-wrap justify-between'>
                  <li className='flex flex-col '>
                    <h3 className='text-[#F07566] text-[16px] font-bold uppercase leading-[32px] mb-[32px]'>Menu</h3>
                    <Link className='text-[#fff] text-[16px]  leading-[32px] capitalize mb-[10px]' to={"#"}>about</Link>
                    <Link className='text-[#fff] text-[16px]  leading-[32px] capitalize mb-[10px]' to={"#"}>Portfolio</Link>
                    <Link className='text-[#fff] text-[16px]  leading-[32px] capitalize mb-[10px]' to={"#"}>Service</Link>
                    <Link className='text-[#fff] text-[16px]  leading-[32px] capitalize mb-[10px]' to={"#"}>Blog</Link>
                    <Link className='text-[#fff] text-[16px]  leading-[32px] capitalize mb-[10px]' to={"#"}>Contact</Link>
                  </li>
                  <li className='flex flex-col absolute sm:static left-[16px] bottom-[-160px] '>
                    <h3 className='text-[#F07566] text-[16px] font-bold uppercase leading-[32px] mb-[32px]'>Service</h3>
                    <Link className='text-[#fff] text-[16px]  leading-[32px] capitalize mb-[10px]' to={"#"}>Consulting</Link>
                    <Link className='text-[#fff] text-[16px]  leading-[32px] capitalize mb-[10px]' to={"#"}>Planning</Link>
                    <Link className='text-[#fff] text-[16px]  leading-[32px] capitalize mb-[10px]' to={"#"}>Support</Link>
                    <Link className='text-[#fff] text-[16px]  leading-[32px] capitalize mb-[10px]' to={"#"}>Cooperation</Link>
                  </li>
                  <li className='flex flex-col absolute left-[16px] top-[80px] md:static'>
                    <h3 className='text-[#F07566] text-[16px] font-bold uppercase leading-[32px] mb-[32px]'>Social</h3>
                    <div className='flex items-center'>
                      <Link to={"#"} className='w-[48px] h-[48px] rounded-[50%] bg-[#f07566] flex items-center justify-center'>
                        <FaFacebookF color='#fff' />
                      </Link>
                      <Link to={"#"} className='w-[48px] h-[48px] rounded-[50%] bg-[#f07566] flex items-center justify-center ml-[8px]'>
                        <BsTwitter color='#fff'/>
                      </Link>
                      <Link to={"#"} className='w-[48px] h-[48px] rounded-[50%] bg-[#f07566] flex items-center justify-center ml-[8px]'>
                        <AiOutlineInstagram color='#fff'/>
                      </Link>
                    </div>
                  </li>
                </ul>
            </div>

            <div className='flex items-center flex-wrap justify-between border-t-[1px] border-[#494949] py-[58px]'>
              <span className='text-[#878382]'>Copyright © 2020 Laaqiq. All Rights Reserved.</span>
              <div>
                <Link to={"#"} className='mr-[67px] text-[#fff] text-[16px]'>Terms of Use</Link>
                <Link to={"#"} className='text-[#fff] text-[16px]'>Privacy Policy</Link>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer