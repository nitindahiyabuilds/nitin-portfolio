import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SkillSlider from '../components/common/Skill-slider'
import Footer from '../components/common/Footer'
import Services from './About'
import ContactTerminal from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import About from './Service'



export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [hash])

  

  return (
    <>
    
      <Hero />
      <SkillSlider />
      <About />
      <Projects />
      <Services />
      <ContactTerminal />
      <Footer />
    </>
  )
}
