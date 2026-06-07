'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [show,   setShow]   = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1000)
    const t2 = setTimeout(() => setShow(false),  1500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!show) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-6 pointer-events-none transition-opacity duration-500 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <p className='text-4xl font-black tracking-[0.15em]'>DEK HUD DEV</p>

      {/* Loading bar */}
      <div className='w-40 h-[2px] bg-black/10 overflow-hidden'>
        <div className='h-full bg-black animate-loading-bar' />
      </div>
    </div>
  )
}
