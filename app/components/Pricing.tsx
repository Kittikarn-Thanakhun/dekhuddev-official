'use client'

import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import t from '../lib/translations'

const popularIdx = 1

export default function Pricing() {
  const { lang } = useLanguage()
  const tx = t[lang].pricing

  return (
    <motion.section
      id='Pricing'
      className='scroll-mt-20 py-24 border-t border-black/10'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='container mx-auto max-w-330 px-5 md:px-6'>
        <span className='text-sm uppercase tracking-[6px] text-black/50'>{tx.label}</span>
        <h2 className='mt-6 text-5xl md:text-7xl font-black text-black leading-tight mb-4'>{tx.heading}</h2>
        <p className='text-black/50 text-lg mb-14 max-w-xl'>{tx.sub}</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {tx.plans.map((plan, i) => {
            const popular = i === popularIdx
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 transition-all duration-300 ${
                  popular
                    ? 'bg-black text-white hover:shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:-translate-y-2'
                    : 'border border-black/10 hover:border-black/30 hover:-translate-y-1 hover:shadow-md'
                }`}
              >
                {popular && (
                  <span className='absolute -top-3 left-8 bg-white text-black text-xs font-bold px-4 py-1 uppercase tracking-widest'>
                    {tx.popular}
                  </span>
                )}

                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${popular ? 'text-white/50' : 'text-black/40'}`}>
                  {plan.name}
                </p>
                <p className='text-3xl font-black mb-2'>{plan.price}</p>
                <p className={`text-sm mb-1 ${popular ? 'text-white/60' : 'text-black/50'}`}>{plan.desc}</p>
                <p className={`text-xs font-medium mb-8 ${popular ? 'text-white/40' : 'text-black/35'}`}>
                  {tx.delivery} {plan.days}
                </p>

                <ul className='flex flex-col gap-3 flex-1'>
                  {plan.features.map(f => (
                    <li key={f} className='flex items-start gap-3 text-sm'>
                      <FaCheck className={`mt-0.5 shrink-0 ${popular ? 'text-white/70' : 'text-black/50'}`} size={11} />
                      <span className={popular ? 'text-white/80' : 'text-black/70'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href='https://line.me/ti/p/WQr_vVJ3iN'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`mt-8 block text-center py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 ${
                    popular
                      ? 'bg-white text-black hover:bg-zinc-100'
                      : 'border border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {tx.cta}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
