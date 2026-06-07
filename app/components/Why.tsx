'use client'

import { motion } from 'framer-motion'
import { FaWallet, FaPalette, FaBolt, FaMobileAlt, FaRocket, FaSlidersH } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import t from '../lib/translations'

const icons = [FaWallet, FaPalette, FaBolt, FaMobileAlt, FaRocket, FaSlidersH]

function Why() {
  const { lang } = useLanguage()
  const tx = t[lang].why

  return (
    <motion.div
      id='Why'
      className='scroll-mt-32 border-t border-black/10 mt-20 text-center py-20 bg-[#f5f5f5]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='container mx-auto max-w-[1320px]'>
        <span className='text-sm uppercase tracking-[6px] text-black/50'>{tx.label}</span>
        <h2 className='mt-6 text-5xl md:text-7xl font-black text-black leading-tight'>{tx.heading}</h2>
        <p className='max-w-3xl mx-auto mt-2 text-black/60 text-lg leading-9 px-5'>{tx.desc}</p>

        <div className='grid grid-cols-1 mx-10 md:mx-0 md:grid-cols-3 gap-8 mt-16 text-white'>
          {tx.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <div
                key={card.title}
                className='group bg-[#0f0f0f] border border-white/10 rounded-3xl p-10
                  hover:-translate-y-3 hover:scale-[1.02] hover:border-white/20
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
                  transition-all duration-500 cursor-pointer overflow-hidden relative'
              >
                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500' />
                <Icon className='mx-auto text-4xl mb-6 text-white group-hover:scale-110 transition-all duration-500 relative z-10' />
                <h3 className='text-2xl font-semibold mb-4 relative z-10'>{card.title}</h3>
                <p className='text-gray-400 leading-7 relative z-10'>{card.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Why
