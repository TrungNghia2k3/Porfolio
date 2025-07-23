import './styles/App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import { SectionDivider } from './components/ProgressiveReveal';

function App() {
  return (
    <SmoothScrollWrapper>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 overflow-x-hidden">
        <Header />
        <main className="space-y-0">
          <Hero />
          <SectionDivider delay={500} />
          <About />
          <SectionDivider delay={300} />
          <TechStack />
          <SectionDivider delay={300} />
          <Projects />
          <SectionDivider delay={300} />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
}

export default App;
