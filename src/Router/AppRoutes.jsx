import { Routes, Route } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Services from '../pages/About'
import About from '../pages/Service'
import ContactTerminal from '../pages/Contact'
import Hero from '../pages/Hero'
import Atlas from '../pages/Atlas'


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} default={true}/>
    

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/atlas" element={<Atlas />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactTerminal />} />
      </Route>
    </Routes>
  )
}
