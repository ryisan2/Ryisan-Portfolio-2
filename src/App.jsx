import { Navbar } from "./components/navbar/navbar"
import Hero from '/src/components/hero/hero.jsx';
import { About } from "./components/About/About"
<<<<<<< Updated upstream
import { Experience } from "./components/Experience/Experience"
=======
import { Experience } from "./components/Experience/Experience.jsx"
>>>>>>> Stashed changes
import { Projects } from "./components/Projects/Projects"
import { Footer } from "./components/Footer/Footer"
import AudioPlayer from './components/AudioPlayer/AudioPlayer.jsx';
import styles from './App.module.css';

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
    </div>
  );
}

export default App
