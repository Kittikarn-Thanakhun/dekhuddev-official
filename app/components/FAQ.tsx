'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import t from '../lib/translations'

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className='border-b border-black/10'>
      <button
        onClick={onToggle}
        className='w-full flex items-start justify-between gap-6 py-6 text-left group'
      >
        <span className='font-semibold text-base group-hover:text-black/70 transition-colors duration-200'>{q}</span>
        <span className='shrink-0 mt-0.5 text-black/40'>
          {open ? <FaMinus size={13} /> : <FaPlus size={13} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-60 pb-6' : 'max-h-0'}`}>
        <p className='text-black/55 leading-7 text-sm'>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const { lang } = useLanguage()
  const tx = t[lang].faq

  return (
    <motion.section
      id='FAQ'
      className='scroll-mt-20 py-24 border-t border-black/10 bg-[#f5f5f5]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='container mx-auto max-w-330 px-5 md:px-6'>
        <span className='text-sm uppercase tracking-[6px] text-black/50'>{tx.label}</span>
        <h2 className='mt-6 text-5xl md:text-7xl font-black text-black leading-tight mb-14'>{tx.heading}</h2>
        <div className='max-w-3xl'>
          {tx.items.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
