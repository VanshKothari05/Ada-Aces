import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>Ada <span>&amp;</span> Aces</div>
          <p>Bold strategy. Relentless execution.<br />We make brands unforgettable.</p>
        </div>
        <div className={styles.col}>
          <h4>Pages</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Our Work</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.col}>
          <h4>Services</h4>
          <span>Brand Strategy</span>
          <span>Digital Campaigns</span>
          <span>Creative Direction</span>
          <span>Growth Marketing</span>
          <span>Social Media</span>
        </div>
        <div className={styles.col}>
          <h4>Connect</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
          <a href="mailto:hello@adaaces.com">hello@adaaces.com</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Ada &amp; Aces. All rights reserved.</span>
        <span>Made with obsession.</span>
      </div>
    </footer>
  );
}
