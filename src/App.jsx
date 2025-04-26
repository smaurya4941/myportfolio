import About from "./components/About/About"
import Certifications from "./components/Cerifications/Certifications"

import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import Projects from "./components/Projects/Projects"
// import VantaBackground from './components/VantaBackgorund'


function App() {

  return (
    <div className="h-auto bg-[#0a1f56] w-auto text-white overflow-hidden">
      {/* <h1>My Portfolio</h1> */}
      {/* <VantaBackground /> */}
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
