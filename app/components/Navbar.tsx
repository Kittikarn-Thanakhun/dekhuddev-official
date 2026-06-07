'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import AuthModal from './AuthModal'
import { useLanguage } from '../context/LanguageContext'
import t from '../lib/translations'

const navLinks = [
  { label: 'Home',     href: 'Header'   },
  { label: 'Services', href: 'Why'      },
  { label: 'Projects', href: 'Projects' },
  { label: 'Pricing',  href: 'Pricing'  },
  { label: 'Reviews',  href: 'Reviews'  },
  { label: 'Contact',  href: 'Contact'  },
]

const linkClass =
  'relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-black/60 transition-colors duration-200'

function Navbar() {
  const { lang, toggleLang } = useLanguage()
  const tx = t[lang].nav

  const [open,  setOpen]  = useState(false)
  const [modal, setModal] = useState<'login' | 'register' | null>(null)
  const [user,  setUser]  = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('dhd_current')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const logout = () => { localStorage.removeItem('dhd_current'); setUser(null) }
  const handleSuccess = (u: { name: string; email: string }) => { setUser(u); setModal(null) }

  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-black/10'>

        <div className='container mx-auto max-w-330 px-6 h-18 flex items-center justify-between relative'>

          {/* Logo */}
          <a className='text-xl font-bold tracking-wide shrink-0 cursor-pointer' href='#Header'
            onClick={e => scrollTo(e as React.MouseEvent<HTMLAnchorElement>, 'Header')}>
            DEK HUD DEV
          </a>

          {/* Center links — desktop */}
          <ul className='hidden md:flex absolute left-1/2 -translate-x-1/2 flex-row items-center gap-8'>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a className={linkClass} href={`#${href}`} onClick={e => scrollTo(e, href)}>{label}</a>
              </li>
            ))}
          </ul>

          {/* Right — desktop */}
          <div className='hidden md:flex items-center gap-3 shrink-0'>

            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className='text-xs font-bold tracking-widest uppercase text-black/40 hover:text-black border border-black/15 hover:border-black/40 px-3 py-1.5 transition-all duration-200'
            >
              {lang === 'en' ? 'TH' : 'EN'}
            </button>

            {user ? (
              <>
                <div className='flex items-center gap-2 text-sm'>
                  <span className='w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold'>
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span className='font-medium'>{user.name}</span>
                </div>
                <button onClick={logout} className='px-4 py-2 text-sm text-black/40 hover:text-black border border-transparent hover:border-black/20 transition-all duration-200'>
                  {tx.signOut}
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setModal('register')}
                  className='group relative px-6 py-2.5 text-sm font-medium tracking-widest uppercase overflow-hidden border border-zinc-900'>
                  <span className='relative z-10 text-zinc-900 group-hover:text-white transition-colors duration-300 ease-out'>Register</span>
                  <span className='absolute inset-0 bg-zinc-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out' />
                </button>
                <button onClick={() => setModal('login')}
                  className='px-6 py-2.5 text-sm font-medium tracking-widest uppercase bg-zinc-900 text-white hover:ring-2 hover:ring-zinc-900 hover:ring-offset-2 transition-all duration-200'>
                  Login
                </button>
              </>
            )}
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className='md:hidden text-xl cursor-pointer' aria-label='Toggle menu'>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className='flex flex-col items-center gap-5 py-6 border-t border-black/10'>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a className={linkClass} href={`#${href}`} onClick={e => scrollTo(e, href)}>{label}</a>
              </li>
            ))}

            {/* Lang toggle mobile */}
            <li>
              <button onClick={toggleLang}
                className='text-xs font-bold tracking-widest uppercase text-black/40 hover:text-black border border-black/15 hover:border-black/40 px-4 py-1.5 transition-all duration-200'>
                {lang === 'en' ? 'TH' : 'EN'}
              </button>
            </li>

            {user ? (
              <li className='flex flex-col items-center gap-2 mt-2'>
                <div className='flex items-center gap-2 text-sm'>
                  <span className='w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold'>
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span className='font-medium'>{user.name}</span>
                </div>
                <button onClick={logout} className='text-sm text-black/40 hover:text-black transition-colors'>{tx.signOut}</button>
              </li>
            ) : (
              <li className='flex gap-3 mt-2'>
                <button onClick={() => { setOpen(false); setModal('register') }}
                  className='group relative px-6 py-2.5 text-sm font-medium tracking-widest uppercase overflow-hidden border border-zinc-900'>
                  <span className='relative z-10 text-zinc-900 group-hover:text-white transition-colors duration-300 ease-out'>Register</span>
                  <span className='absolute inset-0 bg-zinc-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out' />
                </button>
                <button onClick={() => { setOpen(false); setModal('login') }}
                  className='px-6 py-2.5 text-sm font-medium tracking-widest uppercase bg-zinc-900 text-white hover:ring-2 hover:ring-zinc-900 hover:ring-offset-2 transition-all duration-200'>
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {modal && (
        <AuthModal mode={modal} onClose={() => setModal(null)} onSwitch={setModal} onSuccess={handleSuccess} />
      )}
    </>
  )
}

export default Navbar
