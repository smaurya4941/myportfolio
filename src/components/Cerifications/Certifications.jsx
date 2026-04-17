import React from 'react'
import completePython from '../../assets/CompletePython.png'
import pythonAndDjango from '../../assets/Python_Django.png'
import spi from '../../assets/softpro.png'
import CertificateCard from './CertificateCard'

const certificates = [
  {
    name: "Python with Django",
    image: spi,
    link: "https://drive.google.com/file/d/1M0nP0zGmuwH5uXRAcYZBG4FPO3BVqlOA/view?usp=sharing",
  },
  {
    name: "Python & Django Framework",
    image: pythonAndDjango,
    link: "https://drive.google.com/file/d/1HBWb6UPtZmk8h-LQohr7vV0qkc-cnhpW/view?usp=sharing",
  },
  {
    name: "Complete Python",
    image: completePython,
    link: "https://drive.google.com/file/d/1qUM_oPm4p6nmPUbjceeOoUCFGGgTDmV0/view?usp=sharing",
  },
]

const achievements = [
  'Solved 300+ problems on GeeksforGeeks and 280+ problems on LeetCode.',
  'Earned 4 stars in Java on HackerRank.',
  'Completed certifications in Python & Django Development, Java Programming, Machine Learning, and DSA.',
]

const additionalCertifications = [
  'Java Programming',
  'Machine Learning',
  'DSA',
]

function Certifications() {
  return (
    <section id='certificates' className='rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] md:p-7'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]'>Certifications</p>
          <h2 className='mt-2 font-[var(--font-display)] text-[1.9rem] leading-tight text-white sm:text-[2.2rem]'>Certifications and achievements that support my growth as a developer.</h2>
        </div>
        <p className='max-w-lg text-sm leading-6 text-[var(--color-muted)]'>
          These certifications and coding achievements reflect consistent learning in development,
          machine learning, and problem solving.
        </p>
      </div>

      <div className='mt-6 grid gap-3 md:grid-cols-3'>
        {achievements.map((item) => (
          <div key={item} className='rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 text-sm leading-6 text-[var(--color-muted)]'>
            {item}
          </div>
        ))}
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {additionalCertifications.map((item) => (
          <span
            key={item}
            className='rounded-full border border-[rgba(243,179,93,0.24)] bg-[rgba(243,179,93,0.08)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]'
          >
            {item}
          </span>
        ))}
      </div>

      <div className='mt-6 grid gap-4 lg:grid-cols-3'>
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.name} {...certificate} />
        ))}
      </div>
    </section>
  )
}

export default Certifications
