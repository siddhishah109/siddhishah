import AboutSection from "./components/homepage/about";
import Projects  from "./components/homepage/projects";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Achievements from "./components/homepage/achievements";
import Skills from "./components/homepage/skills";


export default function Home() {
  

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects/>
      <Education />
      <Achievements />
      <ContactSection />
    </>
  )
};