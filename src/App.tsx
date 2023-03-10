import './styles/App.scss'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import GoToTop from './components/goToTop/GoToTop'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="text-[#1f2937] dark:text-[#fff] dark:bg-[#1f2937] duration-100">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <GoToTop />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
