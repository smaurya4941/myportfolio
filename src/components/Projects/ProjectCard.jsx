import React from 'react'

const ProjectCard = ({ title, main, tech, demolink, sourcelink, image, highlights = [] }) => {
  return (
    <article className='group overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] transition hover:-translate-y-1 hover:border-[rgba(243,179,93,0.28)]'>
      <div className='overflow-hidden'>
        <img className='h-48 w-full object-cover transition duration-500 group-hover:scale-105' src={image} alt={title} />
      </div>
      <div className='p-4'>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='text-xl font-bold leading-snug text-white'>{title}</h3>
          <span className='rounded-full border border-[rgba(243,179,93,0.28)] bg-[rgba(243,179,93,0.08)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]'>
            Featured
          </span>
        </div>
        <p className='mt-3 text-sm leading-6 text-[var(--color-muted)]'>{main}</p>
        <p className='mt-3 text-sm leading-6 text-[var(--color-muted)]'>
          <span className='font-bold text-white'>Stack:</span> {tech}
        </p>

        {highlights.length > 0 && (
          <div className='mt-3 flex flex-wrap gap-2'>
            {highlights.map((item) => (
              <span
                key={item}
                className='rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]'
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className='mt-4 flex flex-wrap gap-2.5'>
          {demolink && (
            <a
              href={demolink}
              target="_blank"
              rel="noreferrer"
              className='inline-flex rounded-full bg-[var(--color-accent)] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#09111f] transition hover:bg-[#ffc779]'
            >
              Live Demo
            </a>
          )}
          {sourcelink && (
            <a
              href={sourcelink}
              target="_blank"
              rel="noreferrer"
              className='inline-flex rounded-full border border-white/10 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/5'
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
