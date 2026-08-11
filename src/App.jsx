import { useState } from 'react'
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

  return (
    <div className="bg-bg min-h-screen">
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
