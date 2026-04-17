import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import about from '../../assets/about.png'

const strengths = [
  {
    title: 'Web development foundation',
    description:
      'I build web applications using Django, React, Laravel, HTML, CSS, JavaScript, and database-backed workflows with a focus on practical implementation.',
  },
  {
    title: 'Problem solving and CS basics',
    description:
      'I actively practice DSA, OOPs, and core computer science concepts, which helps me approach features with stronger logic and cleaner implementation.',
  },
  {
    title: 'Learning mindset',
    description:
      'I am motivated by continuous learning across software development and machine learning, and I enjoy adapting quickly to new tools, workflows, and team expectations.',
  },
]

const About = () => {
  return (
    <section id='about' className='grid gap-6 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] md:grid-cols-[0.78fr_1.22fr] md:p-7'>
      <div className='flex items-center justify-center'>
        <div className='relative w-full max-w-xs overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-3'>
          <div className='absolute inset-x-8 top-8 h-24 rounded-full bg-[rgba(96,165,250,0.18)] blur-3xl' />
          <img className='relative h-full w-full rounded-[1.2rem] object-cover' src={about} alt="Illustration representing Sachin Maurya's profile" />
        </div>
      </div>

      <div className='flex flex-col justify-center'>
        <p className='text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]'>About Me</p>
        <h2 className='mt-2 font-[var(--font-display)] text-[1.9rem] leading-tight text-white sm:text-[2.2rem]'>
          A final-year developer building strong web and software fundamentals.
        </h2>
        <p className='mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]'>
          I am a motivated B.Tech CSE final-year student with hands-on project work in web development,
          Django, React, Laravel, databases, and machine learning. My goal is to begin my career as a software
          developer and contribute to useful digital solutions with strong adaptability, collaboration, and continuous learning.
        </p>

        <div className='mt-5 grid gap-3'>
          {strengths.map((item) => (
            <div key={item.title} className='rounded-[1.25rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4'>
              <div className='flex items-start gap-3'>
                <span className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]'>
                  <IoArrowForward size={16} />
                </span>
                <div>
                  <h3 className='text-base font-bold text-white'>{item.title}</h3>
                  <p className='mt-1.5 text-sm leading-6 text-[var(--color-muted)]'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
