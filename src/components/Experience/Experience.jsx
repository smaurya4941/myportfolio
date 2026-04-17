import React from 'react'
import { FaCss3, FaDatabase, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact } from 'react-icons/fa'
import { SiBootstrap, SiDjango, SiJupyter, SiLaravel, SiMysql, SiPostgresql, SiPostman, SiTailwindcss } from 'react-icons/si'

const techStack = [
  { icon: <FaPython color='#FFD43B' size={28} />, name: 'Python' },
  { icon: <FaJava color='#5382A1' size={28} />, name: 'Java' },
  { icon: <SiDjango color='#44B78B' size={28} />, name: 'Django' },
  { icon: <FaReact color='#61DAFB' size={28} />, name: 'React' },
  { icon: <SiLaravel color='#FF2D20' size={28} />, name: 'Laravel' },
  { icon: <FaPhp color='#777BB4' size={28} />, name: 'PHP' },
  { icon: <SiPostgresql color='#336791' size={28} />, name: 'PostgreSQL' },
  { icon: <SiMysql color='#4479A1' size={28} />, name: 'MySQL' },
  { icon: <FaHtml5 color='#E34F26' size={28} />, name: 'HTML5' },
  { icon: <FaCss3 color='#1572B6' size={28} />, name: 'CSS3' },
  { icon: <FaJs color='#F7DF1E' size={28} />, name: 'JavaScript' },
  { icon: <FaDatabase color='#7DD3FC' size={28} />, name: 'SQL' },
  { icon: <SiBootstrap color='#7952B3' size={28} />, name: 'Bootstrap' },
  { icon: <SiTailwindcss color='#38BDF8' size={28} />, name: 'Tailwind CSS' },
  { icon: <SiPostman color='#FF6C37' size={28} />, name: 'Postman' },
  { icon: <SiJupyter color='#F37626' size={28} />, name: 'Jupyter' },
]

const Experience = () => {
  return (
    <section id='experience' className='rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] md:p-7'>
      <div className='grid gap-6 lg:grid-cols-[0.95fr_1.05fr]'>
        <div>
          <p className='text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]'>Experience</p>
          <h2 className='mt-2 font-[var(--font-display)] text-[1.9rem] leading-tight text-white sm:text-[2.2rem]'>Training and internship experience across web development, backend systems, and machine learning basics.</h2>
          <p className='mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]'>
            My experience includes web application development, backend feature work, authentication systems,
            CRUD workflows, and formal training in machine learning and data visualization.
          </p>

          <div className='mt-5 space-y-3'>
            <div className='rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4'>
              <div className='flex flex-col gap-4'>
                <div>
                  <p className='text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]'>February 2026 - Present</p>
                  <h3 className='mt-1.5 text-xl font-bold text-white'>Bizwoke Nova | PHP Laravel Developer Intern</h3>
                </div>
                <ul className='space-y-1.5 text-sm leading-6 text-[var(--color-muted)]'>
                  <li>Developed and maintained backend features for ArnNuts, an e-commerce platform, using Laravel and MySQL.</li>
                  <li>Worked on an SEO Analytics Tool and integrated SerpAPI for real-time keyword ranking data.</li>
                  <li>Implemented automated background jobs with Laravel Queues and Scheduler to keep SEO data updated.</li>
                  <li>Gained practical exposure to scalable backend systems, debugging, and deployment workflows.</li>
                </ul>
              </div>
            </div>

            <div className='rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4'>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
               
                <div>
                  <p className='text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]'>July 2024 - September 2024</p>
                  <h3 className='mt-1.5 text-xl font-bold text-white'>SoftPro India | Client-Side Developer Intern</h3>
                  <p className='mt-1.5 text-sm leading-6 text-[var(--color-muted)]'>
                    Built web applications using Django and SQLite3 with CRUD operations in a School Management System,
                    and implemented authentication features for secure user management.
                  </p>
                </div>
              </div>
            </div>

            <div className='rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4'>
              <div className='flex flex-col gap-4'>
                <div>
                  <p className='text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]'>April 2024 - May 2025</p>
                  <h3 className='mt-1.5 text-xl font-bold text-white'>Machine Learning Training | Internshala</h3>
                </div>
                <ul className='space-y-1.5 text-sm leading-6 text-[var(--color-muted)]'>
                  <li>Completed certified training covering Python, data visualization, and supervised learning fundamentals.</li>
                  <li>Worked with practical ML concepts and scored 66% in the final assessment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='grid gap-3 sm:grid-cols-2'>
            {techStack.map((item) => (
              <div
                key={item.name}
                className='flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-3.5 transition hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.05)]'
              >
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.04)]'>
                  {item.icon}
                </div>
                <span className='text-sm font-semibold text-white'>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
