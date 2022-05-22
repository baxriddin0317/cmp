import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

function Header() {

  const [ nav, setNav ] = useState(false);

  return (
    <header className='bg-white shadow-sm py-3 sticky top-0 z-50'>
        <div className='container flex max-w-[1200px] px-2 m-auto items-center justify-between'>
            <div className='flex items-center'>
              <Link to="#" className='font-bold text-3xl uppercase'>cmp</Link>
              <ul className='hidden md:flex'>
                <li className='ml-[42px] text-[16px] text-[#333333] capitalize'> <Link to="#"> About </Link></li>
                <li className='ml-[42px] text-[16px] text-[#333333] capitalize'> <Link to="#"> prtifolio </Link></li>
                <li className='ml-[42px] text-[16px] text-[#333333] capitalize'> <Link to="#"> service</Link></li>
                <li className='ml-[42px] text-[16px] text-[#333333] capitalize'> <Link to="#"> blog</Link></li>
                <li className='ml-[42px] text-[16px] text-[#333333] capitalize'> <Link to="#"> contact</Link></li>
              </ul>
            </div>

            <div className='flex items-center'>
              <button className='px-3 py-1 md:px-4 md:py-2 uppercase text-[#F07566] hover:text-[#fff] hover:bg-[#F07566] border mr-4 border-[#F07566] rounded-md text-[14px] md:text-[16px]'>
                contact
              </button>
              <div onClick={() => setNav(!nav)} className="block md:hidden" >
                { !nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} /> }
              </div>
            </div>
        </div>

        <div className={nav ? 'fixed z-10 left-0 top-0 w-[65%] h-full bg-white shadow py-4 ease-in-out duration-500 md:hidden' : "fixed left-[-100%]"}>
           <Link to="#" className='font-bold text-3xl uppercase pl-[30px]'>cmp</Link>
            <ul className='uppercase p-0'>
              <li className='text-center text-[16px] text-[#333333] py-2 border-b-[1px]'> <Link to="#"> About </Link></li>
              <li className='text-center text-[16px] text-[#333333] py-2 border-b-[1px]'> <Link to="#"> prtifolio </Link></li>
              <li className='text-center text-[16px] text-[#333333] py-2 border-b-[1px]'> <Link to="#"> service</Link></li>
              <li className='text-center text-[16px] text-[#333333] py-2 border-b-[1px]'> <Link to="#"> blog</Link></li>
              <li className='text-center text-[16px] text-[#333333] py-2 border-b-[1px]'> <Link to="#"> contact</Link></li>
            </ul>
        </div>

    </header>
)
}

export default Header;