import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BootScreen from './components/BootScreen'

function App() {
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [])

  const handleBootDone = () => {
    setBooted(true)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  return (
    <div className="bg-bg min-h-screen">
      {!booted && <BootScreen onDone={handleBootDone} />}
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
