import { useState } from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from "../../utils.js";
import emailjs from '@emailjs/browser';

emailjs.init('CF0xCJR7a9lEdBomR');

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsLoading(false);
    setEmailSent(false);
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    emailjs.sendForm('service_nqzn54c', 'template_jn7jfdq', event.target, 'CF0xCJR7a9lEdBomR')
      .then(() => {
        setIsLoading(false);
        setEmailSent(true);
        setIsSubmitted(true);
      }, (error) => {
        console.log(error.text);
        setIsLoading(false);
        alert("An error occurred, please try again later. Please contact me directly at Ryisan@suprasia.xyz");
      });
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am <span className={styles.ryisan}>Ryisan</span></h1>
        <p className={styles.description}>
          I am a full stack developer with 2 years of experience using React,
          Node, Javascript, Typescript, AI, and Backend tools. Reach out if you want to
          learn more!
        </p>
        <a onClick={toggleModal} className={styles.contactBtn}>Contact Me</a>
      </div>
      <img
        src="/assets/heroImage.png"
        alt="Hero Image"
        className={styles.heropic}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
      <div className={`${styles.modal} ${isModalOpen ? styles.modalOpen : ''}`}>
          className={styles.closeBtn}
          onClick={toggleModal}
        />
        <div className={`${styles.modalHalf} ${styles.modalHalfLeft} ${styles.modalAbout}`}>
          <div className={`${styles.information} ${styles.introTxt2}`}>
            <h3><span className={`${styles.modalTitle} ${styles.modalTitleAbout}`}>Here&apos;s A Bit About Me</span></h3>
            <br />
            <h4><span className={`${styles.redText} ${styles.modalSub} ${styles.modalSubAbout}`}>Excited To Create!</span></h4>
            &nbsp;
            <p className={styles.modalPara}>
              I&apos;m a <span className={styles.redText}>Frontend Software Engineer</span> that doesn&apos;t <br />
              believe in staying in one lane. My passion is true <span className={styles.redText}><br /> creativity</span> and all of
              the great things that come <br /> with that creativity.
              {/* ... rest of the paragraph ... */}
            </p>
            {/* Add language icons here */}
          </div>
        </div>
        <div className={`${styles.modalHalfRight} ${isSubmitted ? styles.successBackground : ''}`}>
          {!isSubmitted ? (
            <div className={styles.formContainer}>
              <h3 className={styles.contactHeader}><span>Let&apos;s Speak Together!</span></h3>
              <h4 className={styles.contactSub}>I&apos;m currently open to new opportunities</h4>
              
              {!emailSent ? (
                <form id="contact__form" className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formItem}>
                    <input className={styles.input} name="user_name" type="text" placeholder="Name" required />
                  </div>
                  <div className={styles.formItem}>
                    <input className={styles.input} name="user_email" type="email" placeholder="Email" required />
                  </div>
                  <div className={styles.formItem}>
                    <textarea className={styles.input} name="message" placeholder="Message" required></textarea>
                  </div>
                  <div className={styles.btnDiv}>
                    <button className={styles.contactBtn} type="submit">
                      Send it my way!
                    </button>
                  </div>
                </form>
              ) : (
                <div className={styles.successContent}>
                  <h2>Thank you!</h2>
                  <p>Thanks for the message! Looking forward to speaking to you very soon!</p>
                  <div className={styles.smiley}>😃</div>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.successContent}>
              <h2>Thank you!</h2>
              <p>Thanks for the message! Looking forward to speaking to you very soon!</p>
              <div className={styles.smiley}>😃</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
