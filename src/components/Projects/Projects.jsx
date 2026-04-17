import React, { useState } from 'react'
import bmi from '../../assets/bmi.jpg'
import pg from '../../assets/pgg.jpg'
import project1 from '../../assets/project1.avif'
import todo from '../../assets/todo.jpg'
import ProjectCard from './ProjectCard'

const projects = [
  {
    image: todo,
    title: "Inventory Management System",
    main: "Built and deployed a role-based inventory system with real-time tracking and email authentication, designed REST APIs, and integrated PostgreSQL for scalable data management.",
    highlights: ['Django + DRF', 'Role-based system', 'Email authentication', 'PDF/Excel export'],
    tech: "Django, DRF, PostgreSQL, Bootstrap",
    demolink: "https://inventory-ywaz.onrender.com",
  },
  {
    image: bmi,
    title: "SMS-Spam Detection App",
    main: "Implemented text preprocessing, TF-IDF vectorization, and Naive Bayes based classification to identify spam messages, with performance reaching around 97% accuracy.",
    highlights: ['Scikit-learn', 'TF-IDF', 'Naive Bayes', 'Streamlit', '~97% accuracy'],
    tech: "Python, Scikit-learn, Streamlit",
    demolink: "https://spam-detection-sachin.streamlit.app",
  },
  {
    image: pg,
    title: "Algorithm Visualizer",
    main: "Developed an interactive React-based application to visualize sorting and searching algorithms step by step, with real-time animations and complexity comparison for better conceptual clarity.",
    highlights: ['React', 'State management', 'DSA concepts', 'Real-time animation'],
    tech: "JavaScript, React, DSA Concepts",
    demolink: "https://algo-visualisation.vercel.app",
    sourcelink: "https://github.com/smaurya4941",
  },
  {
    image: project1,
    title: "ArnNuts Backend Work",
    main: "Contributed backend features for an e-commerce platform and related SEO analytics tooling, including SerpAPI integration and automated background updates using Laravel Queues and Scheduler.",
    highlights: ['Laravel internship', 'SerpAPI', 'Queues & Scheduler', 'MySQL'],
    tech: "PHP, Laravel, MySQL",
  },
]

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id='projects' className='rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] md:p-7'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]'>Projects</p>
          <h2 className='mt-2 font-[var(--font-display)] text-[1.9rem] leading-tight text-white sm:text-[2.2rem]'>Projects across web development, backend systems, and machine learning.</h2>
        </div>
        <p className='max-w-lg text-sm leading-6 text-[var(--color-muted)]'>
          This set highlights my ability to work across Django, DRF, React, Laravel, PostgreSQL,
          Streamlit, and machine learning-focused application development.
        </p>
      </div>

      <div className='mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {projects.length > 3 && (
        <div className='mt-6 flex justify-center'>
          <button
            type='button'
            onClick={() => setShowAll((prev) => !prev)}
            className='inline-flex rounded-full border border-[rgba(243,179,93,0.35)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[rgba(243,179,93,0.22)]'
          >
            {showAll ? 'Show Fewer Projects' : 'View All Projects'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects
