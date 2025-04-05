import About from "./components/About/About"
import Certifications from "./components/Cerifications/Certifications"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import Projects from "./components/Projects/Projects"


function App() {

  return (
    <div className="bg-[#171d32] h-auto w-auto text-white overflow-hidden">
      {/* <h1>My Portfolio</h1> */}
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Certifications/>
      <Footer/>
    </div>
  )
}

export default App
