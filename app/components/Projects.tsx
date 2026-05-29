import React from 'react'

function Projects() {
  return (
    <div id='Projects' className='scroll-mt-32 border-t border-black/10'>
        <div className=' mt-20 mx-5 md:mx-0'>
            <div className='container mx-auto max-w-[1320px]'>
                <div>
                    <span className='text-sm uppercase tracking-[6px] text-black/50'>
                    My Projects
                    </span>
                    <h2 className='mt-2 text-5xl md:text-6xl font-black text-black leading-tight'>
                        ผลงานของเรา
                    </h2>
                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-white'>

                <div className='group bg-[#0f0f0f] border border-white/10 rounded-[28px] overflow-hidden
                hover:-translate-y-3 hover:border-white/20
                hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]
                transition-all duration-500 cursor-pointer'>

                    <div className='overflow-hidden'>
                    <a href="https://kittikarn-thanakhun.github.io/dieout-website/" target='_blank'><img 
                        className='w-full h-[200px] object-cover group-hover:scale-102 transition-all duration-700'
                        src="/dieout.PNG" 
                        alt="" 
                    /></a>
                    </div>

                    <div className='p-5'>

                    <div className='flex gap-2 mb-5'>
                        <div className='w-3 h-3 rounded-full bg-red-500'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                        <div className='w-3 h-3 rounded-full bg-green-500'></div>
                    </div>

                    <h3 className='font-bold text-4xl mb-4 group-hover:text-white/80 transition-all duration-300'>
                        Dieout Website
                    </h3>

                    <p className='text-gray-400 leading-8'>
                        ไม่ได้ถูกจ้าง หรือเป็นเว็บไซต์ official 
                        ทำเพราะความชอบและอยากพัฒนาตัวเอง
                        เป็นเว็บของกลุ่มแร็ปเปอร์มากความสามารถในประเทศไทยที่ชื่อว่า DIEOUT
                        เอาไว้ติดตามผลงานใหม่ จ้างงาน และอื่นๆ
                    </p>

                    </div>

                </div>

                </div>
            </div>
        </div> 
    </div>
    
  )
}

export default Projects