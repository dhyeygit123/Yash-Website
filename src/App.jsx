import { Routes, Route } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Hero from './components/home/Hero'
import Philosophy from './components/home/Philosophy'
import FeaturedProjects from './components/home/FeaturedProjects'
import AboutPage from './pages/about/page'
 import Projects from './pages/projects/page'
import Services from './pages/services/page'
import Contact from './pages/contact/page'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Philosophy />
                <FeaturedProjects />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
