import React from 'react';
import { format } from 'date-fns';

// components
// -- custom
import WidthContainer from '../WidthContainer/WidthContainer';
// -- icons
import Instagram from '../../public/instagram.svg';
import Facebook from '../../public/facebook.svg';
import Twitter from '../../public/twitter.svg';

// styles
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = format(new Date(), 'y');

  return (
    <footer className={styles.footer}>
      <WidthContainer>
        {/* Newsletter Signup - get latest promotions & travel tips */}
        <form className={styles['newsletter-signup-form']}>
          <h2>
            Join Our <span className={styles.highlight}>Newsletter</span>
          </h2>
          <p>
            Subscribe to our newsletter for the{' '}
            <span className={styles.highlight}>latest promotions</span> and{' '}
            <span className={styles.highlight}>travel tips</span>
          </p>

          <fieldset>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
            />
            <button type="button">Sign Up</button>
          </fieldset>
        </form>

        {/* Social Icons */}
        <ul className={styles['social-icons']}>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <Instagram className={styles.icon} width={32} height={32} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <Facebook className={styles.icon} width={32} height={32} />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank">
              <Twitter className={styles.icon} width={32} height={32} />
            </a>
          </li>
        </ul>

        <p className={styles.copyright}>
          All rights reserved{' '}
          <span className={styles.highlight}>
            &copy; FreeRoam {currentYear}
          </span>
        </p>
      </WidthContainer>
    </footer>
  );
};

export default Footer;
