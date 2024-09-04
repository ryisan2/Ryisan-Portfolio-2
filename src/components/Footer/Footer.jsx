import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.waves}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
        <div className={`${styles.wave} ${styles.wave4}`}></div>
      </div>
      <ul className={styles.socialIcon}>
        <li className={styles.socialIconItem}>
          <a className={styles.socialIconLink} href="https://www.linkedin.com/in/ryisan" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.svg" alt="LinkedIn" />
          </a>
        </li>
        <li className={styles.socialIconItem}>
          <a className={styles.socialIconLink} href="https://twitter.com/ryisan" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.svg" alt="Twitter" />
          </a>
        </li>
        <li className={styles.socialIconItem}>
          <a className={styles.socialIconLink} href="https://twitter.com/blusharkmedia" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.svg" alt="BluShark Media Twitter" />
          </a>
        </li>
        <li className={styles.socialIconItem}>
          <a className={styles.socialIconLink} href="https://github.com/ryisan" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="GitHub" />
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>&copy;{new Date().getFullYear()} Ryisan Champion | All Rights Reserved</p>
    </footer>
  );
};
