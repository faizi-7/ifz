import styles from './page.module.css'
import TopSection from "./components/TopSection/TopSection";
import AboutSection from './components/AboutSection/AboutSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import Themes from './components/Themes/Themes';
import ContactSection from './components/ContactSection/ContactSection';

export default function Page() {
  return <div>
    <Themes/>
    <TopSection/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectSection/>
    <ContactSection/>
  </div>
}