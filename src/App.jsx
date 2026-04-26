import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Labs from './pages/Labs'
import About from './pages/About'
import Contact from './pages/Contact'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router basename="/portfolio">
          <ScrollToTop />
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: 1 }}>
              <AnimatedRoutes />
            </div>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
