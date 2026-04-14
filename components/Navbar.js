'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        Ada <span>&amp;</span> Aces
      </Link>

      <ul className={styles.links}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={`${styles.link} ${pathname === href ? styles.active : ''}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/contact" className={styles.cta}>Let&apos;s Talk</Link>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="menu">
        <span className={open ? styles.line1open : styles.line1} />
        <span className={open ? styles.line2open : styles.line2} />
        <span className={open ? styles.line3open : styles.line3} />
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.mobileLink}>{label}</Link>
          ))}
          <Link href="/contact" className={styles.mobileCta}>Let&apos;s Talk →</Link>
        </div>
      )}
    </nav>
  );
}
