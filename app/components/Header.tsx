'use client'

import React from 'react'
import { 
  FaInstagram, 
  FaFacebook, 
  FaGithub,
  FaLine 
} from "react-icons/fa";
import { motion } from "framer-motion"


function Header() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    >
        <div id='Header' className='container mx-auto max-w-[1320px] pt-[60px] md:pt-[110px]'>
            <div className='flex mt-[1.5rem] p-10 flex-col md:flex-row md:p-0 justify-between'>
                <div><h1 className='text-[6rem] md:text-[8rem] md:ml-5'>D  E  K <br /> H  U  D <br />D  E  V</h1></div>
                

                <div className='flex flex-col justify-end items-center my-5 md:my-0'>

                    <ul className='flex items-center justify-center gap-5 md:mb-10'>

                        <li>
                        <a
                            className='w-12 h-12 rounded-full border border-black/20
                            flex items-center justify-center
                            text-2xl text-black
                            hover:bg-black hover:text-white
                            transition-all duration-300'
                            href="https://www.facebook.com/profile.php?id=61566702126062"
                            target='_blank'
                        >
                            <FaFacebook />
                        </a>
                        </li>

                        <li>
                        <a 
                            className='w-12 h-12 rounded-full border border-black/20
                            flex items-center justify-center
                            text-2xl text-black
                            hover:bg-black hover:text-white
                            transition-all duration-300'
                            href="https://www.instagram.com/dekhuddev_official/"
                            target='_blank'
                        >
                            <FaInstagram />
                        </a>
                        </li>

                        <li>
                        <a 
                            className='w-12 h-12 rounded-full border border-black/20
                            flex items-center justify-center
                            text-2xl text-black
                            hover:bg-black hover:text-white
                            transition-all duration-300'
                            href="https://github.com/Kittikarn-Thanakhun"
                            target='_blank'
                        >
                            <FaGithub />
                        </a>
                        </li>

                        <li>
                        <a 
                            className='w-12 h-12 rounded-full border border-black/20
                            flex items-center justify-center
                            text-2xl text-black
                            hover:bg-black hover:text-white
                            transition-all duration-300'
                            href="https://line.me/ti/p/WQr_vVJ3iN"
                            target='_blank'
                        >
                            <FaLine />
                        </a>
                        </li>

                    </ul>

                </div>
                
                <div className='flex flex-col mt-5 md:mt-0 justify-end md:mr-30 md:mb-9 gap-2'>

                    <p className='text-[20px]'>
                        - Frontend Developer
                    </p>

                    <p className='text-[20px]'>
                        - Modern UI
                    </p>

                    <p className='text-[20px]'>
                        - Responsive Website
                    </p>

                    <p className='text-[20px]'>
                        - Low Price
                    </p>

                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Header