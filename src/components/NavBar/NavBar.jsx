import { RiCloseLine, RiMenu2Line } from '@remixicon/react'
import React, { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

const NavBar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <nav className='sticky top-0 z-40 mx-auto mt-3 flex w-full max-w-7xl items-center justify-between rounded-full border border-[var(--color-border)] bg-[rgba(8,17,31,0.75)] px-4 py-3 backdrop-blur md:mt-4 md:px-6'>
      <a href="#home" className='text-2xl font-extrabold tracking-[0.18em] text-white sm:text-[2rem]'>
        SACHIN
      </a>

      <ul className={`${menu ? "flex" : "hidden"} absolute left-3 right-3 top-[calc(100%+0.6rem)] flex-col gap-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-4 md:border-none md:bg-transparent md:p-0 md:text-[0.72rem] md:shadow-none`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className='block rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-white'
              onClick={() => setMenu(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/myresume.pdf"
        download="Sachin-Maurya-Resume.pdf"
        className='hidden rounded-full border border-[rgba(243,179,93,0.35)] bg-[var(--color-accent-soft)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[rgba(243,179,93,0.22)] md:inline-flex'
      >
        Resume
      </a>

      {menu ? (
        <RiCloseLine
          size={30}
          className='text-white transition-all duration-300 md:hidden'
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className='text-white transition-all duration-300 md:hidden'
          onClick={() => setMenu(true)}
        />
      )}
    </nav>
  )
}

export default NavBar
