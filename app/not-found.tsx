import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 bg-white'>
      <p className='text-sm uppercase tracking-[6px] text-black/40 mb-6'>404 — Page Not Found</p>

      <h1 className='text-[10rem] md:text-[16rem] font-black leading-none text-black/8 select-none'>
        404
      </h1>

      <p className='text-2xl md:text-4xl font-bold mt-4 mb-4 -mt-8 relative z-10'>
        This page doesn&apos;t exist.
      </p>
      <p className='text-black/40 text-center max-w-sm leading-7 mb-10'>
        The link might be broken or the page may have been removed.
      </p>

      <Link
        href='/'
        className='group relative px-8 py-3 text-sm font-medium tracking-widest uppercase overflow-hidden border border-zinc-900'
      >
        <span className='relative z-10 text-zinc-900 group-hover:text-white transition-colors duration-300 ease-out'>
          Back to Home
        </span>
        <span className='absolute inset-0 bg-zinc-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out' />
      </Link>
    </div>
  )
}
