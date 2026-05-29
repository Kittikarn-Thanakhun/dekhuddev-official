import React from 'react'
import { FaInstagram, FaLine } from "react-icons/fa";

function Contact() {
  return (
    <div id='Contact' className='scroll-mt-32 mt-20 bg-[#18181b] text-white py-15 border-t border-white/10'>

      <div className='container mx-auto max-w-[1320px]'>

        <div className='text-center mx-5 md:mx-0'>

          <span className='uppercase tracking-[5px] text-white/40 text-sm'>
            Contact
          </span>

          <h2 className='text-4xl md:text-7xl font-black mt-5 leading-tight'>
            เริ่มต้นที่ 200 - 3000 บาท
          </h2>

          <p className='text-white/60 text-lg mt-6 max-w-2xl mx-auto leading-8'>
            ราคาขึ้นอยู่กับความยากง่ายของงาน 
            สามารถพูดคุยรายละเอียดเพิ่มเติมได้ครับบบ
          </p>

          <div className='flex justify-center gap-5 mt-12 flex-wrap'>

            <a 
              className='flex items-center gap-3 border border-white/10 hover:border-white/30
              hover:bg-white hover:text-black
              transition-all duration-300 px-8 py-4 rounded-full font-semibold'
              href="https://line.me/ti/p/WQr_vVJ3iN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLine className='text-2xl' />
              LINE
            </a>

            <a 
              className='flex items-center gap-3 border border-white/10 hover:border-white/30
              hover:bg-white hover:text-black
              transition-all duration-300 px-8 py-4 rounded-full font-semibold'
              href="https://www.instagram.com/dekhuddev_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className='text-2xl' />
              Instagram
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact