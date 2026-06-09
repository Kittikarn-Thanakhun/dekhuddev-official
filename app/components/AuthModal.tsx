'use client'

import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../lib/firebase'
import { useLanguage } from '../context/LanguageContext'
import tr from '../lib/translations'

interface AuthModalProps {
  mode: 'login' | 'register'
  onClose: () => void
  onSwitch: (mode: 'login' | 'register') => void
  onSuccess: (user: { name: string; email: string }) => void
}

export default function AuthModal({ mode, onClose, onSwitch, onSuccess }: AuthModalProps) {
  const { lang } = useLanguage()
  const tx = tr[lang].auth

  const [form,    setForm]    = useState({ name: '', email: '', password: '', confirm: '' })
  const [error,   setError]   = useState('')
  const [loading, setLoading] = useState(false)

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (mode === 'register') {
      if (form.password !== form.confirm) { setError(tx.errMatch); return }
      const users: { name: string; email: string; password: string }[] = JSON.parse(localStorage.getItem('dhd_users') || '[]')
      if (users.find(u => u.email === form.email)) { setError(tx.errUsed); return }
      users.push({ name: form.name, email: form.email, password: form.password })
      localStorage.setItem('dhd_users', JSON.stringify(users))
      const user = { name: form.name, email: form.email }
      localStorage.setItem('dhd_current', JSON.stringify(user))
      onSuccess(user)
    } else {
      const users: { name: string; email: string; password: string }[] = JSON.parse(localStorage.getItem('dhd_users') || '[]')
      const match = users.find(u => u.email === form.email && u.password === form.password)
      if (!match) { setError(tx.errInvalid); return }
      const user = { name: match.name, email: match.email }
      localStorage.setItem('dhd_current', JSON.stringify(user))
      onSuccess(user)
    }
  }

  const handleGoogle = async () => {
    setError('')
    setLoading(true)
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = {
        name:  result.user.displayName || 'User',
        email: result.user.email       || '',
      }
      localStorage.setItem('dhd_current', JSON.stringify(user))
      onSuccess(user)
    } catch {
      setError(tx.errGoogle)
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full border border-black/15 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors duration-200 bg-zinc-50 focus:bg-white'

  return (
    <div className='fixed inset-0 z-200 flex items-center justify-center px-4' style={{ animation: 'overlay-in 0.2s ease-out both' }}>
      <div className='absolute inset-0 bg-black/40 backdrop-blur-sm' onClick={onClose} />
      <div className='relative bg-white w-full max-w-105 p-8 shadow-2xl' style={{ animation: 'modal-up 0.25s ease-out both' }}>

        <button onClick={onClose} className='absolute top-4 right-4 text-black/30 hover:text-black transition-colors' aria-label='Close'>
          <FaTimes size={14} />
        </button>

        <h2 className='text-2xl font-bold mb-1'>{mode === 'login' ? tx.signIn : tx.createAccount}</h2>
        <p className='text-sm text-black/40 mb-6'>{mode === 'login' ? tx.welcome : tx.join}</p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {mode === 'register' && (
            <div className='flex flex-col gap-1'>
              <label className='text-xs font-semibold tracking-wide uppercase text-black/50'>{tx.nameLabel}</label>
              <input type='text' required value={form.name} onChange={set('name')} className={inputClass} placeholder={tx.namePlaceholder} />
            </div>
          )}
          <div className='flex flex-col gap-1'>
            <label className='text-xs font-semibold tracking-wide uppercase text-black/50'>{tx.emailLabel}</label>
            <input type='email' required value={form.email} onChange={set('email')} className={inputClass} placeholder={tx.emailPlaceholder} />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-xs font-semibold tracking-wide uppercase text-black/50'>{tx.passLabel}</label>
            <input type='password' required minLength={6} value={form.password} onChange={set('password')} className={inputClass} placeholder={tx.passPlaceholder} />
          </div>
          {mode === 'register' && (
            <div className='flex flex-col gap-1'>
              <label className='text-xs font-semibold tracking-wide uppercase text-black/50'>{tx.confirmLabel}</label>
              <input type='password' required value={form.confirm} onChange={set('confirm')} className={inputClass} placeholder={tx.confirmPlaceholder} />
            </div>
          )}

          {error && <p className='text-red-500 text-sm bg-red-50 border border-red-100 px-3 py-2'>{error}</p>}

          <button type='submit' className='w-full bg-black text-white py-3 text-sm font-medium tracking-wide hover:bg-zinc-800 transition-colors duration-200 mt-1'>
            {mode === 'login' ? tx.submitSignIn : tx.submitRegister}
          </button>
        </form>

        <div className='flex items-center gap-3 my-5'>
          <div className='flex-1 h-px bg-black/10' />
          <span className='text-xs text-black/30 uppercase tracking-widest'>{tx.orDivider}</span>
          <div className='flex-1 h-px bg-black/10' />
        </div>

        <button
          onClick={handleGoogle}
          disabled={loading}
          className='w-full flex items-center justify-center gap-3 border border-black/15 py-3 text-sm font-medium hover:bg-zinc-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <FcGoogle size={18} />
          {tx.googleBtn}
        </button>

        <p className='text-sm text-center text-black/40 mt-5'>
          {mode === 'login' ? tx.noAccount : tx.hasAccount}
          <button onClick={() => onSwitch(mode === 'login' ? 'register' : 'login')} className='text-black font-semibold hover:underline underline-offset-2'>
            {mode === 'login' ? tx.signUpLink : tx.signInLink}
          </button>
        </p>
      </div>
    </div>
  )
}
