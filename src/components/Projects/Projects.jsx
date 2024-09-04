import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Projects.module.css";

const usePointerGlow = () => {
  React.useEffect(() => {
    const syncPointer = ({ clientX, clientY }) => {
      const x = clientX.toFixed(2);
      const y = clientY.toFixed(2);
      const xp = (clientX / window.innerWidth).toFixed(2);
      const yp = (clientY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--xp', xp);
      document.documentElement.style.setProperty('--y', y);
      document.documentElement.style.setProperty('--yp', yp);
    };
    window.addEventListener('pointermove', syncPointer);
    return () => window.removeEventListener('pointermove', syncPointer);
  }, []);
};

const ProjectCard = ({ image, title, description, technologies, sourceLink }) => (
  <article  className={styles.glowCard} data-glow>
    <span data-glow></span>
    <a href={sourceLink} target="_blank" rel="noopener noreferrer">
    <img 
      className={styles.cardImg}
      src={image}
      alt={`${title} Project`}
    />

    </a>
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.techList}>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <a href={sourceLink} className={styles.sourceLink} data-glow>
        <span><img src="/assets/Footer/github.svg" alt="github" className={styles.icon} target="_blank" rel="noopener noreferrer" /></span>
      </a>
    </div>
  </article>
);

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceLink: PropTypes.string.isRequired,
};

export const Projects = () => {
  usePointerGlow();

  const projectsData = [
    {
      image: "../../../assets/project/bobaman.png",
      title: "Boba Mandarin",
      description: "Mandarin app modeled after Duolingo",
      technologies: ["React", "MongoDB", "Stripe"],
      sourceLink: "https://boba-mandarin.vercel.app/"
    },
    {
      image: "../../../assets/project/profileex.png",
      title: "Profile Example",
      description: "A sample profile project",
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceLink: "https://github.com/ryisan2/week4-project/deployments/github-pages"
    },
    {
      image: "../../../assets/project/ultraverse.png",
      title: "Ultraverse",
      description: "An immersive virtual reality experience",
      technologies: ["Unity", "C#", "VR"],
      sourceLink: "https://ryisan-internship.vercel.app/"
    }
  ];

  return (
    <div id="projects" className={styles.projectsWrapper}>
      <h2 className={styles.proj}>Projects</h2>
      <div className={styles.cardCont}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
