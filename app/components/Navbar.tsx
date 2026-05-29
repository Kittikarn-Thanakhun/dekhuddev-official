'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

function Navbar() {

    const [toggle, setToggle] = useState(false);

    const updateToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/10'>
        <div className='container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]'>
            <div className='flex justify-center items-center text-center'>
                <a className='text-xl items-center text-center' href="#Header">DEK HUD DEV</a>
            </div>
            <ul className={`${!toggle ? 'hidden' : 'flex'} flex flex-col items-center my-5 md:flex md:flex-row`}>

                <li className='my-2 md:mx-4'>
                    <a 
                    className='relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-black/70 transition-all duration-300'
                    href="#Header"
                    >
                    Home
                    </a>
                </li>

                <li className='my-2 md:mx-4'>
                    <a 
                    className='relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-black/70 transition-all duration-300'
                    href="#Why"
                    >
                    Services
                    </a>
                </li>

                <li className='my-2 md:mx-4'>
                    <a 
                    className='relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-black/70 transition-all duration-300'
                    href="#Projects"
                    >
                    Projects
                    </a>
                </li>

                <li className='my-5 md:mx-4'>
                    <a 
                    className='border border-black px-7 py-3 hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg'
                    href="#Contact"
                    >
                    Contact
                    </a>
                </li>

                </ul>


            <div 
                onClick={updateToggle} 
                className='absolute right-5 cursor-pointer text-xl md:hidden'
                >
                {!toggle ? <FaBars /> : <FaTimes />}
            </div>
        </div>
    </div>
  )
}

export default Navbar