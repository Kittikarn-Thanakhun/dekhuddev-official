'use client'

import { motion } from 'framer-motion'
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiFramer, SiGit, SiGithub, SiFigma, SiJavascript, SiHtml5,
} from 'react-icons/si'
import { useLanguage } from '../context/LanguageContext'
import t from '../lib/translations'

const stack = [
  { Icon: SiNextdotjs,   name: 'Next.js',       bg: 'bg-black',  text: 'text-white'     },
  { Icon: SiReact,       name: 'React',         bg: 'bg-[#222]', text: 'text-[#61DAFB]' },
  { Icon: SiTypescript,  name: 'TypeScript',    bg: 'bg-[#222]', text: 'text-[#3178C6]' },
  { Icon: SiJavascript,  name: 'JavaScript',    bg: 'bg-[#222]', text: 'text-[#F7DF1E]' },
  { Icon: SiTailwindcss, name: 'Tailwind CSS',  bg: 'bg-[#222]', text: 'text-[#38BDF8]' },
  { Icon: SiHtml5,       name: 'HTML5',         bg: 'bg-[#222]', text: 'text-[#E34F26]' },
  { Icon: SiFramer,      name: 'Framer Motion', bg: 'bg-[#222]', text: 'text-white'      },
  { Icon: SiGit,         name: 'Git',           bg: 'bg-[#222]', text: 'text-[#F05032]' },
  { Icon: SiGithub,      name: 'GitHub',        bg: 'bg-[#222]', text: 'text-white'      },
  { Icon: SiFigma,       name: 'Figma',         bg: 'bg-[#222]', text: 'text-[#A259FF]' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item      = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

export default function TechStack() {
  const { lang } = useLanguage()
  const tx = t[lang].techstack

  return (
    <motion.section
      id='TechStack'
      className='scroll-mt-20 py-24 border-t border-black/10 bg-[#f5f5f5]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='container mx-auto max-w-330 px-5 md:px-6'>
        <span className='text-sm uppercase tracking-[6px] text-black/50'>{tx.label}</span>
        <h2 className='mt-6 text-5xl md:text-7xl font-black text-black leading-tight mb-14'>{tx.heading}</h2>

        <motion.div
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          {stack.map(({ Icon, name, bg, text }) => (
            <motion.div
              key={name}
              variants={item}
              className={`group flex flex-col items-center gap-3 ${bg} py-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default`}
            >
              <Icon className={`text-4xl ${text} group-hover:scale-110 transition-transform duration-300`} />
              <span className='text-xs font-medium text-white/60'>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
