import About from "./components/About/About"
import Certifications from "./components/Cerifications/Certifications"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import Projects from "./components/Projects/Projects"
import SkillsSummary from "./components/SkillsSummary/SkillsSummary"

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(35,77,132,0.45),_transparent_70%)] blur-3xl" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(173,127,74,0.26),_transparent_72%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(6,12,24,0.95),_rgba(9,15,27,0.98))]" />
      </div>

      <NavBar />
      <main className="mx-auto mt-3 flex w-full max-w-7xl flex-col gap-4 px-3 pb-8 sm:mt-4 sm:px-5 lg:px-6">
        <Home />
        <About />
        <SkillsSummary />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Footer />
      </main>
    </div>
  )
}

export default App
