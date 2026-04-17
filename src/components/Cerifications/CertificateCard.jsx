import React from 'react'

function CertificateCard({ name, image, link }) {
  return (
    <article className='flex flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 transition hover:-translate-y-1 hover:border-[rgba(243,179,93,0.28)]'>
      <div className='flex h-36 items-center justify-center rounded-[1.1rem] bg-white p-4'>
        <img className='max-h-full w-auto object-contain' src={image} alt={name} />
      </div>
      <p className='mt-4 text-lg font-bold text-white'>{name}</p>
      <p className='mt-2 text-sm leading-6 text-[var(--color-muted)]'>
        Verified learning that strengthens my practical understanding and supports future delivery work.
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className='mt-4 inline-flex w-fit rounded-full border border-[rgba(243,179,93,0.35)] bg-[var(--color-accent-soft)] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)] transition hover:bg-[rgba(243,179,93,0.22)]'
      >
        View Certificate
      </a>
    </article>
  )
}

export default CertificateCard
