'use client'

import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollTop}
      aria-label='Back to top'
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 bg-black text-white flex items-center justify-center
        hover:bg-zinc-700 hover:scale-110 transition-all duration-300 shadow-lg
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <FaArrowUp size={13} />
    </button>
  )
}
