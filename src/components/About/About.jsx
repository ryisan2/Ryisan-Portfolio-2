import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.headliner}>
        <h2 id="about" className={styles.title}>About</h2>
        <img
          src="/assets/1.svg"
          alt="worker image"
          className={styles.aboutImg}
        />
      </div>
      <div className={styles.moreInfo}>
        <div className={styles.content}>
          <img
            src="/assets/frontend.png"
            alt="frontend image"
            className={styles.icon}
          />
          <div className={styles.about}>
            <h3 className={styles.text}>Frontend Developer</h3>
            <p className={styles.text}>
              I&apos;m a Frontend Developer with experience in building
              responsive and optimized sites.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <img
            src="/assets/backend.png"
            alt="backend image"
            className={styles.icon}
          />
          <div className={styles.about}>
            <h3 className={styles.text}>Backend Developer</h3>
            <p className={styles.text}>
              I have experience developing fast and optimised
              back-end systems and APIs.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <img
            src="/assets/AI.png"
            alt="AI image"
            className={styles.icon}
          />
          <div className={styles.about}>
            <h3 className={styles.text}>AI Engineer</h3>
            <p className={styles.text}>
              Two years experience as a Prompt Engineer working
              for companies such as Outlier and Socrates.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <img
            src="/assets/web3.png"
            alt="web3 image"
            className={styles.icon}
          />
          <div className={styles.about}>
            <h3 className={styles.text}>Web3 Consultant</h3>
            <p className={styles.text}>
              10 years of experience as a consultant in cryptocurrency and Web3 products, with expertise in content creation, consultation, project management, customer success, community management, and implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
