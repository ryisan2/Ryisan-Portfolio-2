import { Navbar } from "./components/navbar/navbar"
import Hero from '/src/components/hero/hero.jsx';
import { About } from "./components/About/About"
import { Projects } from "./components/Projects/Projects"
import { Footer } from "./components/Footer/Footer"
import AudioPlayer from './components/AudioPlayer/AudioPlayer.jsx';
import styles from './App.module.css';
import BackToTop from './components/BackToTop/BackToTop';
import { Experience } from './components/Experience/experience';

function App() {
  return (
    <div className={styles.App}>
      <AudioPlayer />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App
