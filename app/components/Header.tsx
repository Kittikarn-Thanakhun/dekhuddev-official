'use client'

import { FaInstagram, FaFacebook, FaGithub, FaLine } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import t from '../lib/translations'

function Header() {
  const { lang } = useLanguage()
  const tx = t[lang].header

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div id='Header' className='container mx-auto max-w-[1320px] pt-[60px] md:pt-[110px]'>
        <div className='flex mt-[1.5rem] p-10 flex-col md:flex-row md:p-0 justify-between'>
          <div>
            <h1 className='text-[6rem] md:text-[8rem] md:ml-5'>D  E  K <br /> H  U  D <br />D  E  V</h1>
          </div>

          <div className='flex flex-col justify-end items-center my-5 md:my-0'>
            <ul className='flex items-center justify-center gap-5 md:mb-10'>
              {[
                { href: 'https://www.facebook.com/profile.php?id=61566702126062', Icon: FaFacebook },
                { href: 'https://www.instagram.com/dekhuddev_official/',          Icon: FaInstagram },
                { href: 'https://github.com/Kittikarn-Thanakhun',                 Icon: FaGithub },
                { href: 'https://line.me/ti/p/WQr_vVJ3iN',                       Icon: FaLine },
              ].map(({ href, Icon }) => (
                <li key={href}>
                  <a
                    className='w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-2xl text-black hover:bg-black hover:text-white transition-all duration-300'
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col mt-5 md:mt-0 justify-end md:mr-30 md:mb-9 gap-2'>
            {tx.items.map(item => (
              <p key={item} className='text-[20px]'>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header
