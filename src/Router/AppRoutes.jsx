import { Routes, Route } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Capabilities from '../pages/Capabilities'
import Thinking from '../pages/Thinking'
import ContactTerminal from '../pages/Contact'
import ForgeApi from '../pages/ForgeApi'
import AICoach from '../pages/AICoach'
import ThreatMap from '../pages/ThreatMap'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} default={true} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/forge-api" element={<ForgeApi />} />
        <Route path="/projects/ai-coach" element={<AICoach />} />
        <Route path="/projects/threatmap" element={<ThreatMap />} />
        <Route path="/about" element={<Capabilities />} />
        <Route path="/thinking" element={<Thinking />} />
        <Route path="/contact" element={<ContactTerminal />} />
      </Route>
    </Routes>
  )
}
