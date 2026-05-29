import React from 'react'
import {
  FaWallet,
  FaPalette,
  FaBolt,
  FaMobileAlt,
  FaRocket,
  FaSlidersH
} from "react-icons/fa";


function Why() {
  return (
    <div id='Why' className='scroll-mt-32 border-t border-black/10 mt-20 text-center py-20 bg-[#f5f5f5]'>

      <div className='container mx-auto max-w-[1320px]'>

        <span className='text-sm uppercase tracking-[6px] text-black/50'>
          Why Choose Us
        </span>

        <h2 className='mt-6 text-5xl md:text-7xl font-black text-black leading-tight'>
          ทำไมต้องเลือกเรา
        </h2>

        <p className='max-w-3xl mx-auto mt-2 text-black/60 text-lg leading-9 px-5'>
          ดีไซน์ทันสมัย ใช้งานง่าย รองรับทุกอุปกรณ์
          เว็บไซต์โหลดไว ลื่นไหล ราคาเข้าถึงง่าย
          และใส่ใจในทุกรายละเอียดของงาน
        </p>

        <div className='w-32 bg-white/20 mx-auto mt-8'></div>

        
            <div className='grid grid-cols-1 mx-10 md:mx-0 md:grid-cols-3 gap-8 mt-16 text-white'>
              <div className='group bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 
              hover:-translate-y-3 hover:scale-[1.02] hover:border-white/20 
              hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
              transition-all duration-500 cursor-pointer overflow-hidden relative'>

                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                <FaWallet className='mx-auto text-4xl mb-6 text-white group-hover:scale-110 transition-all duration-500 relative z-10' />

                <h3 className='text-2xl font-semibold mb-4 relative z-10'>
                  ราคาสบายกระเป๋า
                </h3>

                <p className='text-gray-400 leading-7 relative z-10'>
                  เว็บไซต์คุณภาพดี ในราคาที่เข้าถึงง่าย เหมาะสำหรับทั้งพอร์ตโฟลิโอและธุรกิจเริ่มต้น
                </p>
              </div>


              <div className='group bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 
              hover:-translate-y-3 hover:scale-[1.02] hover:border-white/20 
              hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
              transition-all duration-500 cursor-pointer overflow-hidden relative'>

                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                <FaPalette className='mx-auto text-4xl mb-6 text-white group-hover:scale-110 transition-all duration-500 relative z-10' />

                <h3 className='text-2xl font-semibold mb-4 relative z-10'>
                  ดีไซน์ทันสมัย
                </h3>

                <p className='text-gray-400 leading-7 relative z-10'>
                  ออกแบบเว็บไซต์ให้ดูสะอาด เรียบหรู และทันสมัย เพื่อสร้างความน่าเชื่อถือให้กับแบรนด์ของคุณ
                </p>
              </div>


              <div className='group bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 
              hover:-translate-y-3 hover:scale-[1.02] hover:border-white/20 
              hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
              transition-all duration-500 cursor-pointer overflow-hidden relative'>

                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                <FaBolt className='mx-auto text-4xl mb-6 text-white group-hover:scale-110 transition-all duration-500 relative z-10' />

                <h3 className='text-2xl font-semibold mb-4 relative z-10'>
                  ใช้งานง่าย
                </h3>

                <p className='text-gray-400 leading-7 relative z-10'>
                  จัดวางองค์ประกอบอย่างเป็นระเบียบ เข้าใจง่าย และใช้งานได้สะดวกในทุกส่วน
                </p>
              </div>
              <div className='group bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 
              hover:-translate-y-3 hover:scale-[1.02] hover:border-white/20 
              hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
              transition-all duration-500 cursor-pointer overflow-hidden relative'>

                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                <FaMobileAlt className='mx-auto text-4xl mb-6 text-white group-hover:scale-110 transition-all duration-500 relative z-10' />

                <h3 className='text-2xl font-semibold mb-4 relative z-10'>
                  รองรับทุกขนาดหน้าจอ
                </h3>

                <p className='text-gray-400 leading-7 relative z-10'>
                  ใช้งานได้อย่างสมบูรณ์ทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์
                </p>
              </div>
              <div className='group bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 
              hover:-translate-y-3 hover:scale-[1.02] hover:border-white/20 
              hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
              transition-all duration-500 cursor-pointer overflow-hidden relative'>

                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                <FaRocket className='mx-auto text-4xl mb-6 text-white group-hover:scale-110 transition-all duration-500 relative z-10' />

                <h3 className='text-2xl font-semibold mb-4 relative z-10'>
                  โหลดไว ลื่นไหล
                </h3>

                <p className='text-gray-400 leading-7 relative z-10'>
                  พัฒนาเว็บไซต์ให้ทำงานได้รวดเร็ว เพื่อประสบการณ์การใช้งานที่ดียิ่งขึ้น
                </p>
              </div>
              <div className='group bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 
              hover:-translate-y-3 hover:scale-[1.02] hover:border-white/20 
              hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
              transition-all duration-500 cursor-pointer overflow-hidden relative'>

                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                <FaSlidersH className='mx-auto text-4xl mb-6 text-white group-hover:scale-110 transition-all duration-500 relative z-10' />

                <h3 className='text-2xl font-semibold mb-4 relative z-10'>
                  ปรับแต่งได้ตามต้องการ
                </h3>

                <p className='text-gray-400 leading-7 relative z-10'>
                  สามารถออกแบบและแก้ไขเว็บไซต์ให้ตรงกับสไตล์และความต้องการของคุณได้
                </p>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Why