'use client'

import { useState, useEffect } from 'react'
import { FaStar, FaPen, FaTrash } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import t from '../lib/translations'

interface Review {
  id: string; name: string; email: string
  rating: number; comment: string; date: string
}

function StarPicker({ value, hover, onPick, onHover, words }: {
  value: number; hover: number
  onPick: (v: number) => void; onHover: (v: number) => void
  words: readonly string[]
}) {
  return (
    <div className='flex items-center gap-1'>
      {[1,2,3,4,5].map(i => (
        <button key={i} type='button' onClick={() => onPick(i)}
          onMouseEnter={() => onHover(i)} onMouseLeave={() => onHover(0)}
          className='text-2xl transition-transform duration-100 hover:scale-110'>
          <FaStar className={i <= (hover || value) ? 'text-amber-400' : 'text-black/15'} />
        </button>
      ))}
      <span className='ml-2 text-sm text-black/40'>{words[hover || value]}</span>
    </div>
  )
}

function StarRow({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div className='flex gap-0.5'>
      {[1,2,3,4,5].map(i => (
        <FaStar key={i} size={size} className={i <= value ? 'text-amber-400' : 'text-black/10'} />
      ))}
    </div>
  )
}

export default function Reviews() {
  const { lang } = useLanguage()
  const tx = t[lang].reviews

  const [reviews,         setReviews]         = useState<Review[]>([])
  const [user,            setUser]            = useState<{ name: string; email: string } | null>(null)
  const [submitted,       setSubmitted]       = useState(false)
  const [rating,          setRating]          = useState(5)
  const [hover,           setHover]           = useState(0)
  const [comment,         setComment]         = useState('')
  const [editingId,       setEditingId]       = useState<string | null>(null)
  const [editRating,      setEditRating]      = useState(5)
  const [editHover,       setEditHover]       = useState(0)
  const [editComment,     setEditComment]     = useState('')
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('dhd_current')
    const saved: Review[] = JSON.parse(localStorage.getItem('dhd_reviews') || '[]')
    setReviews(saved)
    if (stored) {
      const u = JSON.parse(stored)
      setUser(u)
      if (saved.find(r => r.email === u.email)) setSubmitted(true)
    }
  }, [])

  const persist = (updated: Review[]) => {
    localStorage.setItem('dhd_reviews', JSON.stringify(updated))
    setReviews(updated)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return
    persist([...reviews, { id: Date.now().toString(), name: user.name, email: user.email, rating, comment, date: new Date().toISOString().split('T')[0] }])
    setSubmitted(true)
  }

  const startEdit = (r: Review) => {
    setEditingId(r.id); setEditRating(r.rating); setEditComment(r.comment); setEditHover(0); setConfirmDeleteId(null)
  }

  const saveEdit = (id: string) => {
    persist(reviews.map(r => r.id === id ? { ...r, rating: editRating, comment: editComment } : r))
    setEditingId(null)
  }

  const deleteReview = (id: string) => {
    const target = reviews.find(r => r.id === id)
    persist(reviews.filter(r => r.id !== id))
    setConfirmDeleteId(null); setEditingId(null)
    if (user && target?.email === user.email) setSubmitted(false)
  }

  const avg   = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0
  const total = reviews.length
  const inputClass = 'w-full border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200 bg-zinc-50 focus:bg-white resize-none'

  return (
    <motion.section id='Reviews' className='scroll-mt-20 border-t border-black/10 py-24'
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
      <div className='container mx-auto max-w-330 px-5 md:px-6'>

        <span className='text-sm uppercase tracking-[6px] text-black/50'>{tx.label}</span>
        <div className='flex flex-col md:flex-row md:items-end gap-4 mt-6 mb-14'>
          <h2 className='text-5xl md:text-7xl font-black text-black leading-tight'>{tx.heading}</h2>
          {total > 0 && (
            <div className='flex items-center gap-3 mb-1'>
              <StarRow value={Math.round(avg)} size={18} />
              <span className='font-bold text-xl'>{avg.toFixed(1)}</span>
              <span className='text-black/40 text-sm'>({total})</span>
            </div>
          )}
        </div>

        {total === 0 && (
          <p className='text-black/30 text-sm border border-black/10 bg-zinc-50 px-5 py-6 max-w-md'>{tx.empty}</p>
        )}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {reviews.map(r => {
            const isOwner   = user?.email === r.email
            const isEditing = editingId === r.id
            const isConfirm = confirmDeleteId === r.id
            return (
              <div key={r.id} className='border border-black/10 p-6 hover:border-black/25 transition-all duration-300'>
                <div className='flex items-start justify-between mb-5'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0'>
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className='font-semibold text-sm leading-tight'>{r.name}</p>
                      <p className='text-xs text-black/35 mt-0.5'>{r.date}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    {!isEditing && <StarRow value={r.rating} />}
                    {isOwner && !isEditing && (
                      <div className='flex gap-1 ml-1'>
                        <button onClick={() => startEdit(r)} className='text-black/25 hover:text-black transition-colors p-1'><FaPen size={11} /></button>
                        <button onClick={() => setConfirmDeleteId(isConfirm ? null : r.id)} className='text-black/25 hover:text-red-500 transition-colors p-1'><FaTrash size={11} /></button>
                      </div>
                    )}
                  </div>
                </div>

                {isConfirm && !isEditing && (
                  <div className='mb-4 flex items-center gap-3 border border-red-100 bg-red-50 px-3 py-2.5 text-sm'>
                    <span className='text-black/60 flex-1'>{tx.deleteConfirm}</span>
                    <button onClick={() => deleteReview(r.id)} className='text-red-500 font-semibold hover:text-red-700 transition-colors'>{tx.deleteBtn}</button>
                    <button onClick={() => setConfirmDeleteId(null)} className='text-black/40 hover:text-black transition-colors'>{tx.cancelBtn}</button>
                  </div>
                )}

                {isEditing ? (
                  <div className='flex flex-col gap-4'>
                    <StarPicker value={editRating} hover={editHover} onPick={setEditRating} onHover={setEditHover} words={tx.ratingWords} />
                    <textarea rows={3} value={editComment} onChange={e => setEditComment(e.target.value)} className={inputClass} />
                    <div className='flex gap-2'>
                      <button onClick={() => saveEdit(r.id)} className='px-5 py-2 bg-black text-white text-xs font-medium tracking-wider uppercase hover:bg-zinc-700 transition-colors duration-200'>{tx.saveBtn}</button>
                      <button onClick={() => setEditingId(null)} className='px-5 py-2 border border-black/20 text-black/50 text-xs font-medium tracking-wider uppercase hover:border-black/40 hover:text-black transition-colors duration-200'>{tx.cancelBtn}</button>
                    </div>
                  </div>
                ) : (
                  <p className='text-sm text-black/65 leading-7'>{r.comment}</p>
                )}
              </div>
            )
          })}
        </div>

        <div className='mt-20 pt-14 border-t border-black/10'>
          <h3 className='text-3xl font-bold mb-2'>{tx.leaveTitle}</h3>
          {!user && <p className='text-black/40 text-sm mt-3 border border-black/10 bg-zinc-50 px-5 py-4 max-w-xl'>{tx.loginPrompt}</p>}
          {user && submitted && <p className='text-black/40 text-sm mt-3 border border-black/10 bg-zinc-50 px-5 py-4 max-w-xl'>{tx.alreadyReviewed(user.name)}</p>}
          {user && !submitted && (
            <>
              <p className='text-black/40 text-sm mt-2 mb-8'>{tx.loggedAs} <span className='text-black font-medium'>{user.name}</span>. {tx.shareBelow}</p>
              <form onSubmit={handleSubmit} className='max-w-xl flex flex-col gap-6'>
                <div>
                  <label className='text-xs font-semibold uppercase tracking-widest text-black/50 mb-3 block'>{tx.ratingLabel}</label>
                  <StarPicker value={rating} hover={hover} onPick={setRating} onHover={setHover} words={tx.ratingWords} />
                </div>
                <div>
                  <label className='text-xs font-semibold uppercase tracking-widest text-black/50 mb-3 block'>{tx.commentLabel}</label>
                  <textarea required rows={4} value={comment} onChange={e => setComment(e.target.value)} placeholder={tx.placeholder} className={inputClass} />
                </div>
                <button type='submit' className='self-start group relative px-8 py-3 text-sm font-medium tracking-widest uppercase overflow-hidden border border-zinc-900'>
                  <span className='relative z-10 text-zinc-900 group-hover:text-white transition-colors duration-300 ease-out'>{tx.submitBtn}</span>
                  <span className='absolute inset-0 bg-zinc-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out' />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </motion.section>
  )
}
