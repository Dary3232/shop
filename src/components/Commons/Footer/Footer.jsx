import React from 'react';
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <footer>
        <div className={styles.pointsFooter}>
          <img src='./icons/points-130-130.svg' alt='Points' className={styles.pointsFooter130} />
          <img src='./icons/points-290-290.svg' alt='Points' className={styles.pointsFooter290} />
        </div>
        <div className={styles.containerInfoCopyright}>
          <div className={styles.footerInfo}>
            <div className={styles.column1}>
              <div className={styles.logo}>
                <img src='./icons/logo.svg' alt='Logo' />
              </div>
              <div className={styles.aboutBrend}>
                Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
              </div>
              <div className={styles.findUs}>
                <div className={styles.findUsText}>Find us here:</div>
                <div className={styles.findUsLinks}>
                  <div className={styles.findUsLink}>
                    <a href='#'>FB</a>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.findUsLink}>
                    <a href='#'> TW</a>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.findUsLink}>
                    <a href='#'>INS</a>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.findUsLink}>
                    <a href='#'>PT</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.title}>About</div>
              <ul className={styles.customList}>
                <li className={styles.item}><a href='#'>About us</a></li>
                <li className={styles.item}><a href='#'>Collections</a></li>
                <li className={styles.item}><a href='#'>Shop</a></li>
                <li className={styles.item}><a href='#'>Blog</a></li>
                <li className={styles.item}><a href='#'>Contact us</a></li>
              </ul>
            </div>
            <div className={styles.column3}>
              <div className={styles.title}>Useful links</div>
              <ul className={styles.customList}>
                <li className={styles.item}><a href='#'>Privacy Policy</a></li>
                <li className={styles.item}><a href='#'>Terms of use</a></li>
                <li className={styles.item}><a href='#'>Support</a></li>
                <li className={styles.item}><a href='#'>Shipping details</a></li>
                <li className={styles.item}><a href='#'>FAQs</a></li>
              </ul>
            </div>
            <div className={styles.column4}>
              <div className={styles.title}>Newsletter</div>
              <div className={styles.newsletterTextFooter}>
                Subscribe to be the first to hear about deals, offers and upcoming collections.
              </div>
              <div className={styles.newsletterForm}>
                <form action=''>
                  <label>
                    <input type='text' placeholder='Enter your email' className={styles.input} />
                    <img src='./icons/send.svg' alt='Send' className={styles.sendIcon} />
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <div>
              All right reserved. Fashionee 2020
            </div>
            <div className={styles.paymentMethodsContainer}>
              <div>
                Payment methods:
              </div>
              <div className={styles.paymentMethods}>
                <div className={styles.paymentMethod}>
                  <img src='./icons/visa.svg' alt='Visa' />
                </div>
                <div className={styles.paymentMethod}>
                  <img src='./icons/mastercard.svg' alt='Mastercard' />
                </div>
                <div className={styles.paymentMethod}>
                  <img src='./icons/paypal.svg' alt='Paypal' />
                </div>
                <div className={styles.paymentMethod}>
                  <img src='./icons/payoneer.svg' alt='Payoneer' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};