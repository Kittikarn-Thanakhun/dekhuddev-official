'use client'

import { FaInstagram, FaLine } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import t from '../lib/translations'

function Contact() {
  const { lang } = useLanguage()
  const tx = t[lang].contact

  return (
    <div id='Contact' className='scroll-mt-32 mt-20 bg-[#18181b] text-white py-15 border-t border-white/10'>
      <div className='container mx-auto max-w-330'>
        <div className='text-center mx-5 md:mx-0'>
          <span className='uppercase tracking-[5px] text-white/40 text-sm'>{tx.label}</span>
          <h2 className='text-4xl md:text-7xl font-black mt-5 leading-tight'>{tx.heading}</h2>
          <p className='text-white/60 text-lg mt-6 max-w-2xl mx-auto leading-8'>{tx.desc}</p>

          <div className='flex justify-center gap-5 mt-12 flex-wrap'>
            <a
              className='flex items-center gap-3 border border-white/10 hover:border-white/30 hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold'
              href='https://line.me/ti/p/WQr_vVJ3iN'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLine className='text-2xl' /> LINE
            </a>
            <a
              className='flex items-center gap-3 border border-white/10 hover:border-white/30 hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold'
              href='https://www.instagram.com/dekhuddev_official/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='text-2xl' /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
