import React from 'react'
import TextChanger from '../../TextChanger'
import pic from '../../assets/sachin.jpg'

const Home = () => {
  return (
    <section
      id='home'
      className='grid min-h-[calc(100vh-7rem)] items-center gap-6 rounded-[1.75rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(16,28,48,0.94),rgba(8,17,31,0.86))] px-5 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-8 lg:px-10'
    >
      <div className='max-w-[48rem]'>
        <div className='mb-4 inline-flex rounded-full border border-[rgba(243,179,93,0.24)] bg-[rgba(243,179,93,0.08)] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]'>
          Web Developer
        </div>
        <h1 className='max-w-[18ch] font-[var(--font-display)] text-[2.2rem] leading-[1.08] text-white sm:text-[3rem] lg:text-[3.6rem]'>
          Building practical web products with Python, Django, React, and problem-solving at the core.
        </h1>
        <div className='mt-3 text-lg font-semibold text-[var(--color-accent)] sm:text-xl'>
          <TextChanger />
        </div>
        <p className='mt-4 max-w-xl text-sm leading-6 text-[var(--color-muted)] sm:text-[15px]'>
          Motivated and detail-oriented B.Tech CSE final-year student with strong problem-solving and
          software development skills. Proficient in Python, Java, web development, and machine learning,
          and looking to begin my career as a software developer contributing to practical digital solutions
          with adaptability, collaboration, and continuous learning.
        </p>

        <div className='mt-5 flex flex-wrap gap-2 text-xs text-[var(--color-muted)]'>
          <span className='rounded-full border border-white/10 px-3 py-1.5'>Python</span>
          <span className='rounded-full border border-white/10 px-3 py-1.5'>Django</span>
          <span className='rounded-full border border-white/10 px-3 py-1.5'>React</span>
          <span className='rounded-full border border-white/10 px-3 py-1.5'>Machine Learning</span>
          <span className='rounded-full border border-white/10 px-3 py-1.5'>Java</span>
          <span className='rounded-full border border-white/10 px-3 py-1.5'>Laravel</span>
        </div>

        <div className='mt-6 flex flex-wrap gap-3'>
          <a
            href="#projects"
            className='inline-flex rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#09111f] transition hover:-translate-y-0.5 hover:bg-[#ffc779]'
          >
            View Projects
          </a>
          <a
            href="#contact"
            className='inline-flex rounded-full border border-[var(--color-border)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-white/5'
          >
            Contact Me
          </a>
        </div>

        <div className='mt-6 grid max-w-xl gap-3 sm:grid-cols-3'>
          <div className='rounded-[1.25rem] border border-white/10 bg-white/5 p-3.5'>
            <p className='text-xl font-extrabold text-white'>3+</p>
            <p className='mt-1 text-xs leading-5 text-[var(--color-muted)]'>Major portfolio projects highlighted</p>
          </div>
          <div className='rounded-[1.25rem] border border-white/10 bg-white/5 p-3.5'>
            <p className='text-xl font-extrabold text-white'>300+</p>
            <p className='mt-1 text-xs leading-5 text-[var(--color-muted)]'>Problems solved on GeeksforGeeks</p>
          </div>
          <div className='rounded-[1.25rem] border border-white/10 bg-white/5 p-3.5'>
            <p className='text-xl font-extrabold text-white'>280+</p>
            <p className='mt-1 text-xs leading-5 text-[var(--color-muted)]'>Problems solved on LeetCode</p>
          </div>
        </div>
      </div>

      <div className='relative mx-auto flex w-full max-w-[26rem] justify-center'>
        <div className='absolute inset-x-10 top-8 h-32 rounded-full bg-[rgba(243,179,93,0.16)] blur-3xl' />
        <div className='relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]'>
          <img className='h-full w-full rounded-[1.35rem] object-cover' src={pic} alt="Sachin Maurya portrait" />
          <div className='absolute bottom-5 left-5 right-5 rounded-[1.1rem] border border-white/10 bg-[rgba(7,14,25,0.8)] p-3 backdrop-blur'>
            <p className='text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]'>Current focus</p>
            <p className='mt-1.5 text-sm font-semibold text-white'>Web development, machine learning projects, and entry-level software roles</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
