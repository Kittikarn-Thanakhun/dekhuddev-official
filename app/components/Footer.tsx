'use client'

import { FaInstagram, FaFacebook, FaGithub, FaLine } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import t from '../lib/translations'

function Footer() {
  const { lang } = useLanguage()
  const tx = t[lang].footer

  return (
    <footer className='bg-[#111111] border-t border-white/10 text-white py-12'>
      <div className='container mx-auto max-w-330'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 mx-5 md:mx-0'>
          <div>
            <h2 className='text-3xl font-black tracking-wide'>DEK HUD DEV</h2>
            <p className='text-white/50 mt-4 max-w-md leading-7'>{tx.desc}</p>
          </div>

          <div className='flex items-center gap-4 flex-wrap'>
            {[
              { href: 'https://www.facebook.com/profile.php?id=61566702126062', Icon: FaFacebook },
              { href: 'https://www.instagram.com/dekhuddev_official/',          Icon: FaInstagram },
              { href: 'https://github.com/Kittikarn-Thanakhun',                 Icon: FaGithub },
              { href: 'https://line.me/ti/p/WQr_vVJ3iN',                       Icon: FaLine },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300'
                href={href}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon className='text-xl' />
              </a>
            ))}
          </div>
        </div>

        <div className='border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-sm'>
          © 2026 DEK HUD DEV. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
