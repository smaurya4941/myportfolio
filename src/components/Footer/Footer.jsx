import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail, MdPhone } from 'react-icons/md'
import { TbBrandLeetcode } from 'react-icons/tb'
import { SiGeeksforgeeks } from 'react-icons/si'
import ContactForm from "../ContactForm/ContactForm"

const Footer = () => {
  return (
    <section
      id='contact'
      className='mb-6 rounded-[1.75rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(14,26,46,0.96),rgba(8,17,31,0.92))] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] md:p-7'
    >
      <div className='grid gap-5 lg:grid-cols-[0.95fr_1.05fr]'>
        <div className='rounded-[1.3rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4'>
          <p className='text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]'>Contact</p>
          <h3 className='mt-2 font-[var(--font-display)] text-[1.9rem] leading-tight text-white sm:text-[2.2rem]'>
            Let&apos;s build something that looks sharp and works well.
          </h3>
          <p className='mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)]'>
            If you have a web development, software development, internship, or junior developer opportunity in mind,
            I would love to hear about it.
          </p>

          <div className='mt-5 space-y-3'>
            <div className='flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/5 p-3'>
              <MdPhone size={22} className="text-[var(--color-accent)]" />
              <a href="tel:+917084110492" className='text-sm text-white transition hover:text-[var(--color-accent)]'>
                +91-7084110492
              </a>
            </div>

            <div className='flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/5 p-3'>
              <MdOutlineEmail size={22} className="text-[var(--color-accent)]" />
              <a href="mailto:sachinmaurya4941@gmail.com" className='text-sm text-white transition hover:text-[var(--color-accent)]'>
                sachinmaurya4941@gmail.com
              </a>
            </div>

            <div className='flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/5 p-3'>
              <FaGithub size={20} className="text-[var(--color-accent)]" />
              <a target='_blank' rel='noreferrer' href="https://github.com/smaurya4941" className="text-sm text-white transition hover:text-[var(--color-accent)]">
                github.com/smaurya4941
              </a>
            </div>

            <div className='flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/5 p-3'>
              <FaLinkedin size={20} className="text-[var(--color-accent)]" />
              <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/smaurya4941/" className="text-sm text-white transition hover:text-[var(--color-accent)]">
                linkedin.com/in/smaurya4941
              </a>
            </div>

            <div className='flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/5 p-3'>
              <TbBrandLeetcode size={22} className="text-[var(--color-accent)]" />
              <a target='_blank' rel='noreferrer' href="https://leetcode.com/u/smaurya4941/" className="text-sm text-white transition hover:text-[var(--color-accent)]">
                leetcode.com/u/smaurya4941
              </a>
            </div>

            <div className='flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/5 p-3'>
              <SiGeeksforgeeks size={20} className="text-[var(--color-accent)]" />
              <a target='_blank' rel='noreferrer' href="https://www.geeksforgeeks.org/user/smaurya4941/" className="text-sm text-white transition hover:text-[var(--color-accent)]">
                geeksforgeeks.org/user/smaurya4941
              </a>
            </div>
          </div>
        </div>

        <div className='rounded-[1.3rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Footer
