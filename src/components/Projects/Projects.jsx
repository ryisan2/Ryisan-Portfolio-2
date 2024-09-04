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

const ProjectCard = ({ image, title, description, technologies, sourceLink, projectLink }) => (
  <article  className={styles.glowCard} data-glow>
    <span data-glow></span>
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
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
        <span><img src="/assets/github.svg" alt="github" className={styles.icon} target="_blank" rel="noopener noreferrer" /></span>
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
  projectLink: PropTypes.string.isRequired,
};

const GlossyImageCard = ({ image, title }) => (
  <article className={`${styles.glowCard} ${styles.glossyCard}`} data-glow>
    <span data-glow></span>
    <div className={styles.glossyImageContainer}>
      <img 
        className={styles.glossyImage}
        src={image}
        alt={`${title} Project`}
      />
      <h3 className={styles.glossyTitle}>{title}</h3>
    </div>
  </article>
);

GlossyImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const Projects = () => {
  usePointerGlow();

  const projectsData = [
    {
      image: "/assets/bobaman.png",
      title: "Boba Mandarin",
      description: "Mandarin app modeled after Duolingo",
      technologies: ["React", "MongoDB", "Stripe"],
      projectLink: "https://boba-mandarin.vercel.app/",
      sourceLink: "https://github.com/ryisan2/boba-mandarin"
    },
    {
      image: "/assets/profileex.png",
      title: "Profile Example",
      description: "A sample profile project",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://ryisan2.github.io/week4-project/",
      sourceLink: "https://github.com/ryisan2/week4-project"
    },
    {
      image: "/assets/ultraverse.png",
      title: "Ultraverse",
      description: "An immersive virtual reality experience",
      technologies: ["Unity", "C#", "VR"],
      projectLink: "https://ryisan-internship.vercel.app/",
      sourceLink: "https://github.com/ryisan2/Ryisan-internship"
    }
  ];

  const glossyProjectsData = [
    {
      image: "/assets/rabbots.png",
      title: "Rabbots"
    },
    {
      image: "/assets/cybors.png",
      title: "Cybors"
    },
    {
      image: "/assets/Boba.png",
      title: "BobaBears"
    }
  ];

  return (
    <div id="projects" className={styles.projectsWrapper}>
      <h2 className={`${styles.proj} ${styles.devProj}`}>Development Projects</h2>
      <div className={styles.cardCont}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <h2 className={`${styles.proj} ${styles.nftProj}`}>NFT Projects</h2>
      <div className={styles.glossyCardCont}>
        {glossyProjectsData.map((project, index) => (
          <GlossyImageCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
