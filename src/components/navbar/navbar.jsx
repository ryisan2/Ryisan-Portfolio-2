import  { useState }from "react";
import styles from "./navbar.module.css"
import {getImageUrl} from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <a 
      className={styles.title}
      href="/"> 
      Enjoy My Portfolio!</a>

      <div
      className={styles.menu}
      >
        <img className={styles.menuBtn } src={ menuOpen 
        ? getImageUrl("nav.closeIcon.svg")
        : getImageUrl("nav.menuIcon.svg")
        }
        alt="menu icon"
        onClick ={() => setMenuOpen(!menuOpen)}
        />
        
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
        onClick={()=> setMenuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};
