import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <div id= "experience" className={styles.experienceContainer}>
      <div className={styles.skills}>
        <div className={styles.title}>Experience</div>
        <div className={styles.iconic}>
          <ul className={styles.icons}>
            <li className={styles.skillset}>
              <img
                src={"./assets/skills/html.png"}
                className={styles.icon}
              />
              <h5 className={styles.listText}>HTML</h5>
            </li>
            <li className={styles.skillset}>
              <img
                src={"./assets/skills/javascript.png"}
                className={styles.icon}
              />
              <h5 className={styles.listText}>Javascript</h5>
            </li>
            <li className={styles.skillset}>
              <img
                src={"./assets/skills/typescript.png"}
                className={styles.icon}
              />
              <h5 className={styles.listText}>Typescript</h5>
            </li>
            <li className={styles.skillset}>
              <img
                src={"./assets/skills/react.png"}
                className={styles.icon}
              />
              <h5 className={styles.listText}>React</h5>
            </li>
            <li className={styles.skillset}>
              <img
                src={"./assets/skills/nodejs.png"}
                className={styles.icon}
              />
              <h5 className={styles.listText}>Node.js</h5>
            </li>
            <li className={styles.skillset}>
              <img
                src={"./assets/skills/mongodb.png"}
                className={styles.icon}
              />
              <h5 className={styles.listText}>MongoDB</h5>
            </li>
            <li className={styles.skillset}>
              <img
                src={"./assets/skills/figma.png"}
                className={styles.icon}
              />
              <h5 className={styles.listText}>Figma</h5>
            </li>
            <li className={styles.skillset}>
              <img
                src={"./assets/skills/tailwinds.png"}
                className={styles.icon}
              />
              <h5 className={styles.listText}>TailwindsCSS</h5>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.experienceList}>
        <ul className={styles.resume}>
          <li className={styles.listItem}>
            <div className={styles.content}>
              <a href="https://frontendsimplified.com">
                <img
                  src={getImageUrl("FES.jpeg")}
                  alt="frontend image"
                  className={styles.icon2}
                />
              </a>

              <div className={styles.about}>
                <h3 className={styles.text}>Frontend Developer Support</h3>
                <h6 className={styles.text}>Feb.2024 to Present</h6>
                <ul>
                  <li className={styles.description}>
                    <p>Supported the frontend developer community</p>
                  </li>
                  <li className={styles.description}>
                    <p>Offered guidance on coding best practices.</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.content}>
              <a href="https://suprasia.xyz">
                <img
                  src={getImageUrl("suprasia.png")}
                  alt="frontend image"
                  className={styles.icon2}
                />
              </a>

              <div className={styles.about}>
                <h3 className={styles.text}>Director</h3>
                <h6 className={styles.text}>June 2022 to Feb.2024 </h6>
                <ul>
                  <li className={styles.description}>
                    <p>Customer Success Manager</p>
                  </li>
                  <li className={styles.description}>
                    <p>Developer Relations Management</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.content}>
              <a href="https//twitter.com/blusharkmedia">
                {" "}
                <img
                  src={getImageUrl("Blushark.png")}
                  alt="frontend image"
                  className={styles.icon3}
                />
              </a>

              <div className={styles.about}>
                <h3 className={styles.text}>Managing Director</h3>
                <h6 className={styles.text}>Jan.2023 to February 2024</h6>
                <ul>
                  <li className={styles.description}>
                    <p>Created web3 educational content</p>
                  </li>
                  <li className={styles.description}>
                    <p>
                      Offered guidance on best practices for web3 development.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
