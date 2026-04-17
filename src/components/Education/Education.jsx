import React from 'react'

const educationItems = [
  {
    institution: 'R.R. Institute of Modern Technology, Lucknow',
    period: 'September 2022 - Present',
    course: 'B.Tech in Computer Science and Engineering',
    score: '82%',
  },
  {
    institution: 'P.D Academy, Deoria, UP',
    period: 'May 2019 - March 2021',
    course: 'Intermediate',
    score: '76.6%',
  },
  {
    institution: 'Central Public Academy, Chauri Chaura, Gorakhpur',
    period: 'May 2017 - March 2019',
    course: 'High School',
    score: '88.6%',
  },
]

const Education = () => {
  return (
    <section className='rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] md:p-7'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]'>Education</p>
          <h2 className='mt-2 font-[var(--font-display)] text-[1.9rem] leading-tight text-white sm:text-[2.2rem]'>Academic background supporting software development and continuous learning.</h2>
        </div>
        <p className='max-w-lg text-sm leading-6 text-[var(--color-muted)]'>
          I am a final-year B.Tech CSE student building a strong base in software engineering,
          problem solving, and modern web development.
        </p>
      </div>

      <div className='mt-6 grid gap-3'>
        {educationItems.map((item) => (
          <article key={item.institution} className='rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4'>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
              <div>
                <h3 className='text-lg font-bold text-white'>{item.institution}</h3>
                <p className='mt-1.5 text-sm text-[var(--color-muted)]'>{item.course}</p>
              </div>
              <div className='sm:text-right'>
                <p className='text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]'>{item.period}</p>
                <p className='mt-1.5 text-sm text-white'>Score: {item.score}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
