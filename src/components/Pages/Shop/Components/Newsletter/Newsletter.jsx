import React from 'react';
import styles from './newsLetter.module.css'

export const Newsletter = () => {
  return (
      <div className={styles.containerNewsletter}>
          <div className={styles.newsletterBox}>
              <div className={styles.newsletter}>
                  <img 
                      src='./icons/points-130-130.svg'
                      alt='Points' 
                      className={styles.pointsNewsletter} 
                  />
                  <div className={styles.titleNewsletter}>Newsletter</div>
                  <div className={styles.newsletterText}>
                      Be the first to hear about deals, offers and upcoming collections.
                  </div>
                  <div className={styles.newsletterFormEmail}>
                      <input 
                          type='text'
                          placeholder='Enter your email' 
                          className={styles.inputNewsletter} 
                      />
                      <div className={styles.buttonWrapperNewsletter}>
                          <button className={styles.buttonNewsletter}>Subscribe</button>
                          <div className={styles.verticalLineNewsletter}></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};