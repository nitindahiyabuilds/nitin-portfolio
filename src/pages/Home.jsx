import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SkillSlider from '../components/common/Skill-slider';
import Footer from '../components/common/Footer';
import Capabilities from './Capabilities';
import ContactTerminal from './Contact';
import CurrentlyBuilding from './CurrentlyBuilding';
import Hero from './Hero';
import Projects from './Projects';
import SocialPresence from './SocialPresence';
import Experience from './Experience';
import Writing from './Writing';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    requestAnimationFrame(doScroll);
    const timer = setTimeout(doScroll, 120);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <Hero />
      <CurrentlyBuilding />
      <SkillSlider />
      <Projects />
      <Capabilities />
      <SocialPresence />
      <Experience />
      <Writing />
      <ContactTerminal />
      <Footer />
    </>
  );
}
