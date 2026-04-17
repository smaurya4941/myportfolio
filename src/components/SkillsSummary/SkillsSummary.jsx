import React from 'react'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'SQL', 'PHP', 'HTML', 'CSS', 'PostgreSQL'],
  },
  {
    title: 'Frameworks & Tech',
    items: ['Django', 'DRF', 'Tailwind CSS', 'React', 'Laravel', 'Scikit-learn', 'OpenCV', 'Streamlit'],
  },
  {
    title: 'Libraries & Tools',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'XAMPP', 'SQLite3'],
  },
  {
    title: 'Core Concepts',
    items: ['DSA', 'OOPS', 'Operating Systems', 'Machine Learning', 'Web Development', 'Data Visualisation'],
  },
]

const strengths = [
  'Comfortable building end-to-end web projects with Django, React, Laravel, SQL, and responsive frontend work.',
  'Experienced with data handling and ML-focused tooling including Pandas, NumPy, Matplotlib, Scikit-learn, and Streamlit.',
  'Consistent problem-solving practice through DSA platforms, Java practice, and project-based learning.',
]

const SkillsSummary = () => {
  return (
    <section className='rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] md:p-7'>
      <div className='grid gap-6 lg:grid-cols-[0.92fr_1.08fr]'>
        <div>
          <p className='text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]'>Skills Summary</p>
          <h2 className='mt-2 font-[var(--font-display)] text-[1.9rem] leading-tight text-white sm:text-[2.2rem]'>
            Core technical skills aligned with web development and entry-level software roles.
          </h2>
          <p className='mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]'>
            My profile combines web development, software fundamentals, machine learning training, and
            hands-on project building across backend, frontend, and data-oriented tools.
            I am most comfortable building practical applications and learning quickly through real implementation.
          </p>

          <div className='mt-5 space-y-3'>
            {strengths.map((item) => (
              <div key={item} className='rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-3.5 text-sm leading-6 text-[var(--color-muted)]'>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className='grid gap-3 md:grid-cols-2'>
          {skillGroups.map((group) => (
            <div key={group.title} className='rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4'>
              <h3 className='text-base font-bold text-white'>{group.title}</h3>
              <div className='mt-3 flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-[rgba(243,179,93,0.24)] bg-[rgba(243,179,93,0.08)] px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--color-accent)]'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSummary
